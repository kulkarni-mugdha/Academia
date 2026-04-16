import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from '../../components/student/CourseCard';
import Footer from '../../components/student/Footer';

const Wishlist = () => {

    const { allCourses, wishlist, navigate } = useContext(AppContext)

    const wishlistedCourses = allCourses.filter((course) => wishlist.includes(course._id))

    return (
        <>
            <div className="relative md:px-36 px-8 pt-20 text-left">
                <div>
                    <h1 className='text-4xl font-semibold text-gray-800 dark:text-gray-100'>Wishlist</h1>
                    <p className='text-gray-500 dark:text-gray-300'>
                        <span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span>Wishlist</span>
                    </p>
                </div>
                {wishlistedCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
                        {wishlistedCourses.map((course) => <CourseCard key={course._id} course={course} />)}
                    </div>
                ) : (
                    <div className='my-16 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-gray-500 dark:text-gray-300'>
                        Save courses to your wishlist and they will show up here.
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Wishlist
