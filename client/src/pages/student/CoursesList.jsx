import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
import CourseCard from '../../components/student/CourseCard';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/student/SearchBar';

const CoursesList = () => {

    const { input } = useParams()

    const { allCourses, navigate } = useContext(AppContext)

    const [filteredCourse, setFilteredCourse] = useState([])
    const [searchTerm, setSearchTerm] = useState(input || '')
    const [priceType, setPriceType] = useState('all')
    const [maxPrice, setMaxPrice] = useState('')

    useEffect(() => {

        setSearchTerm(input || '')
    }, [input])

    useEffect(() => {

        if (allCourses && allCourses.length > 0) {

            const tempCourses = allCourses.slice().filter((item) => {
                const title = item.courseTitle.toLowerCase()
                const matchesSearch = searchTerm ? title.includes(searchTerm.toLowerCase()) : true
                const finalPrice = Number(item.coursePrice || 0) - (Number(item.discount || 0) * Number(item.coursePrice || 0)) / 100
                const matchesPriceType = priceType === 'all'
                    ? true
                    : priceType === 'free'
                        ? finalPrice <= 0
                        : finalPrice > 0
                const matchesMaxPrice = maxPrice ? finalPrice <= Number(maxPrice) : true

                return matchesSearch && matchesPriceType && matchesMaxPrice
            })

            setFilteredCourse(tempCourses)

        }

    }, [allCourses, searchTerm, priceType, maxPrice])

    return (
        <>
            <div className="relative md:px-36 px-8 pt-20 text-left">
                <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
                    <div>
                        <h1 className='text-4xl font-semibold text-gray-800 dark:text-gray-100'>Course List</h1>
                        <p className='text-gray-500 dark:text-gray-300'><span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span>Course List</span></p>
                    </div>
                    <SearchBar data={searchTerm} onSearchChange={setSearchTerm} showSubmit={false} />
                </div>
                <div className='mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300'>
                    <select value={priceType} onChange={(e) => setPriceType(e.target.value)} className='rounded border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 outline-none'>
                        <option value="all">All Courses</option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>
                    <input
                        type="number"
                        min="0"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder='Max price'
                        className='w-40 rounded border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 outline-none'
                    />
                </div>
                {searchTerm && <div className='inline-flex items-center gap-4 px-4 py-2 border border-[var(--color-border)] bg-[var(--color-card)] mt-8 -mb-8 text-gray-600 dark:text-gray-300'>
                    <p>{searchTerm}</p>
                    <img onClick={() => navigate('/course-list')} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
                    {filteredCourse.length > 0
                        ? filteredCourse.map((course) => <CourseCard key={course._id} course={course} />)
                        : <p className='col-span-full rounded-xl border border-gray-200 bg-white px-6 py-8 text-center text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'>No courses available</p>}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CoursesList 
