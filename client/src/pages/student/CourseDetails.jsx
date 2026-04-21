import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/student/Footer';
import { assets } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube';
import { useAuth } from '@clerk/clerk-react';
import Loading from '../../components/student/Loading';

const CourseDetails = () => {

  const { id } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [playerData, setPlayerData] = useState(null)
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)

  const { backendUrl, userData, navigate, calculateChapterTime, calculateCourseDuration, calculateRating, calculateNoOfLectures, calculateDiscountedPrice, formatPrice } = useContext(AppContext)
  const { getToken } = useAuth()


  const fetchCourseData = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/course/' + id)

      if (data.success) {
        setCourseData(data.courseData)
      } else {
        toast.error(data.message)
      }

    } catch (error) {

      toast.error(error.message)

    }

  }

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const continueToCheckout = async () => {
    if (!userData) {
      navigate('/login', { state: { from: `/checkout/${id}` } })
      return;
    }

    if (isAlreadyEnrolled) {
      toast.warn('Already Enrolled')
      return;
    }

    navigate(`/checkout/${id}`)
  }

  useEffect(() => {
    fetchCourseData()
  }, [id])

  useEffect(() => {

    if (userData && courseData) {
      setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id))
    }

  }, [userData, courseData])

  return courseData ? (
    <>
    <div className="relative flex items-start justify-between gap-10 px-8 pt-10 text-left md:flex-row md:px-36 md:pt-20">
        <div className="absolute top-0 left-0 -z-1 h-section-height w-full bg-gradient-to-b from-cyan-100/70 dark:from-slate-900"></div>

        <div className="z-10 max-w-xl text-gray-500 dark:text-gray-300">
          <h1 className="md:text-course-deatails-heading-large text-course-deatails-heading-small font-semibold text-gray-800 dark:text-gray-100">
            {courseData.courseTitle}
          </h1>
          <p className="pt-4 md:text-base text-sm" dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}>
          </p>

          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt=''
                className='w-3.5 h-3.5' />
              ))}
            </div>
            <p className='text-blue-600'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>

            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
          </div>

          <p className='text-sm'>Course by <span className='text-blue-600 underline'>{courseData.educator.name}</span></p>

          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className="mb-2 rounded border border-[var(--color-border)] bg-[var(--color-card)]">
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img src={assets.down_arrow_icon} alt="arrow icon" className={`transform transition-transform ${openSections[index] ? "rotate-180" : ""}`} />
                      <p className="font-medium md:text-base text-sm text-gray-800 dark:text-gray-100">{chapter.chapterTitle}</p>
                    </div>
                    <p className="text-sm md:text-default">{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? "max-h-96" : "max-h-0"}`} >
                    <ul className="list-disc border-t border-[var(--color-border)] py-2 text-gray-600 dark:text-gray-300 md:pl-10 pl-4 pr-4">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img src={assets.play_icon} alt="bullet icon" className="w-4 h-4 mt-1" />
                          <div className="flex items-center justify-between w-full text-gray-800 dark:text-gray-100 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2'>
                              {lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                videoId: lecture.lectureUrl.split('/').pop()
                              })} className='text-blue-500 cursor-pointer'>Preview</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-20 text-sm md:text-default">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Course Description</h3>
            <p className="rich-text pt-3" dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}>
            </p>
          </div>
        </div>

        <div className="z-10 max-w-course-card min-w-[300px] overflow-hidden rounded-t bg-[var(--color-card)] shadow-custom-card sm:min-w-[420px] md:rounded-none border border-[var(--color-border)]">
          {
            playerData
              ? <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName='w-full aspect-video' />
              : <img src={courseData.courseThumbnail} alt="" />
          }
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img className="w-3.5" src={assets.time_left_clock_icon} alt="time left clock icon" />
              <p className="text-red-500">
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-blue-600 md:text-4xl text-2xl font-semibold dark:text-blue-300">{formatPrice(calculateDiscountedPrice(courseData.coursePrice, courseData.discount))}</p>
              <p className="md:text-lg text-gray-500 line-through">{formatPrice(courseData.coursePrice)}</p>
              <p className="md:text-lg text-gray-500">{courseData.discount}% off</p>
            </div>
            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="clock icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="clock icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>
            <button onClick={continueToCheckout} className="mt-4 w-full rounded bg-blue-600 py-3 font-medium text-white transition-all hover:bg-blue-700 md:mt-6">
              {isAlreadyEnrolled ? "Already Enrolled" : "Continue to Checkout"}
            </button>
            <div className="pt-6">
              <p className="md:text-xl text-lg font-medium text-gray-800 dark:text-gray-100">What's in the course?</p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div className="min-h-[60vh]">
      <Loading />
      <p className="pb-10 text-center text-sm font-medium text-gray-600 dark:text-gray-300">Loading course details...</p>
    </div>
  )
};

export default CourseDetails;
