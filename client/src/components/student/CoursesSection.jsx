import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CoursesSection = () => {

  const { allCourses } = useContext(AppContext)
  console.log('CoursesSection allCourses:', allCourses)

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-900 dark:text-gray-100">Learn from the best</h2>
      <p className="md:text-base text-sm text-gray-700 dark:text-gray-200 mt-3">
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.length > 0
          ? allCourses.slice(0, 8).map((course) => <CourseCard key={course._id} course={course} />)
          : <p className="col-span-full rounded-xl border border-gray-200 bg-white px-6 py-8 text-center text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">No courses available</p>}
      </div>
      <Link to={'/course-list'} onClick={() => scrollTo(0, 0)} className="text-gray-700 dark:text-gray-200 border border-gray-500/30 dark:border-[var(--color-border)] px-10 py-3 rounded">Show all courses</Link>
    </div>
  );
};

export default CoursesSection;
