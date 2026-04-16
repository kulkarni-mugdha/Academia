import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext()
const WISHLIST_STORAGE_KEY = 'edemy-wishlist'
const THEME_STORAGE_KEY = 'edemy-theme'

const getStoredWishlist = () => {
    if (typeof window === 'undefined') return []

    try {
        const savedWishlist = window.localStorage.getItem(WISHLIST_STORAGE_KEY)
        return savedWishlist ? JSON.parse(savedWishlist) : []
    } catch {
        return []
    }
}

const getStoredTheme = () => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem(THEME_STORAGE_KEY) || 'light'
}

export const AppContextProvider = (props) => {

    const backendUrl = (import.meta.env.VITE_BACKEND_URL || "").trim().replace(/^['"]|['"]$/g, "")
    const currency = '₹'

    const navigate = useNavigate()
    const { getToken } = useAuth()
    const { user } = useUser()

    const [showLogin, setShowLogin] = useState(false)
    const [isEducator,setIsEducator] = useState(false)
    const [allCourses, setAllCourses] = useState([])
    const [userData, setUserData] = useState(null)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [wishlist, setWishlist] = useState(getStoredWishlist)
    const [theme, setTheme] = useState(getStoredTheme)

    // Fetch All Courses
    const fetchAllCourses = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/course/all');
            console.log('Courses API response:', data)

            if (data.success) {
                setAllCourses(data.courses)
                console.log('Courses loaded in frontend:', data.courses)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log('Courses fetch failed:', error)
            toast.error(error.message)
        }

    }

    // Fetch UserData 
    const fetchUserData = async () => {

        try {

            const userRole = user?.publicMetadata?.role
            setIsEducator(userRole === 'educator')
            console.log('AppContext user role:', userRole)

            const token = await getToken();

            const { data } = await axios.get(backendUrl + '/api/user/data',
                { headers: { Authorization: `Bearer ${token}` } })
            console.log('User data API response:', data)

            if (data.success) {
                setUserData(data.user)
            } else (
                toast.error(data.message)
            )

        } catch (error) {
            console.log('User data fetch failed:', error)
            toast.error(error.message)
        }

    }

    // Fetch User Enrolled Courses
    const fetchUserEnrolledCourses = async () => {

        try {
            const token = await getToken();

            const { data } = await axios.get(backendUrl + '/api/user/enrolled-courses',
                { headers: { Authorization: `Bearer ${token}` } })

            if (data.success) {
                setEnrolledCourses(data.enrolledCourses.reverse())
            } else (
                toast.error(data.message)
            )
        } catch (error) {
            console.log('Enrolled courses fetch failed:', error)
            toast.error(error.message)
        }

    }

    // Function to Calculate Course Chapter Time
    const calculateChapterTime = (chapter) => {

        let time = 0

        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)

        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })

    }

    // Function to Calculate Course Duration
    const calculateCourseDuration = (course) => {

        let time = 0

        course.courseContent.map(
            (chapter) => chapter.chapterContent.map(
                (lecture) => time += lecture.lectureDuration
            )
        )

        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })

    }

    const calculateRating = (course) => {

        if (course.courseRatings.length === 0) {
            return 0
        }

        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return Math.floor(totalRating / course.courseRatings.length)
    }

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }

    const calculateDiscountedPrice = (coursePrice, discount) => (
        Number(coursePrice || 0) - (Number(discount || 0) * Number(coursePrice || 0)) / 100
    )

    const formatPrice = (amount) => `${currency}${Math.round(Number(amount || 0)).toLocaleString("en-IN")}`

    const toggleWishlist = (courseId) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.includes(courseId)
                ? prevWishlist.filter((id) => id !== courseId)
                : [...prevWishlist, courseId]

            window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updatedWishlist))
            return updatedWishlist
        })
    }

    const isInWishlist = (courseId) => wishlist.includes(courseId)

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
            window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
            return nextTheme
        })
    }


    useEffect(() => {
        fetchAllCourses()
    }, [])

    useEffect(() => {
        console.log('AppContext allCourses:', allCourses)
    }, [allCourses])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])

    // Fetch User's Data if User is Logged In
    useEffect(() => {
        if (user && !userData) {
            fetchUserData()
            fetchUserEnrolledCourses()
        } else if (!user) {
            setUserData(null)
            setEnrolledCourses([])
            setIsEducator(false)
        }
    }, [user, userData])

    const value = {
        showLogin, setShowLogin,
        backendUrl, currency, navigate,
        userData, setUserData, getToken,
        allCourses, fetchAllCourses,
        enrolledCourses, fetchUserEnrolledCourses,
        calculateChapterTime, calculateCourseDuration,
        calculateRating, calculateNoOfLectures,
        calculateDiscountedPrice, formatPrice,
        isEducator, setIsEducator,
        wishlist, toggleWishlist, isInWishlist,
        theme, toggleTheme
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
