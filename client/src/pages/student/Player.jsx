import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import YouTube from 'react-youtube';
import { assets } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
import axios from 'axios';
import { toast } from 'react-toastify';
import Rating from '../../components/student/Rating';
import Footer from '../../components/student/Footer';
import Loading from '../../components/student/Loading';

const Player = ({ }) => {

  const { enrolledCourses, backendUrl, getToken, calculateChapterTime, userData, fetchUserEnrolledCourses } = useContext(AppContext)

  const { courseId } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [progressData, setProgressData] = useState(null)
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [initialRating, setInitialRating] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);

  const totalLectures = courseData
    ? courseData.courseContent.reduce((count, chapter) => count + chapter.chapterContent.length, 0)
    : 0

  const quizQuestions = courseData
    ? courseData.courseContent
      .filter((chapter) => chapter.chapterContent.length > 0)
      .slice(0, 3)
      .map((chapter, index) => {
        const correctLecture = chapter.chapterContent[0]
        const distractors = courseData.courseContent
          .flatMap((item) => item.chapterContent)
          .filter((lecture) => lecture.lectureId !== correctLecture.lectureId)
          .slice(0, 3)
          .map((lecture) => lecture.lectureTitle)

        const options = [correctLecture.lectureTitle, ...distractors].slice(0, 4)

        return {
          id: `${chapter.chapterId}-${index}`,
          question: `Which lecture belongs to "${chapter.chapterTitle}"?`,
          answer: correctLecture.lectureTitle,
          options,
        }
      })
    : []

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course)
        course.courseRatings.map((item) => {
          if (item.userId === userData._id) {
            setInitialRating(item.rating)
          }
        })
      }
    })
  }

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  useEffect(() => {
    if (enrolledCourses.length > 0) {
      getCourseData()
    }
  }, [enrolledCourses])

  const markLectureAsCompleted = async (lectureId) => {

    try {

      const token = await getToken()

      const { data } = await axios.post(backendUrl + '/api/user/update-course-progress',
        { courseId, lectureId },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        toast.success(data.message)
        const latestProgress = await getCourseProgress()
        const completedLectures = latestProgress?.lectureCompleted?.length || 0

        if (totalLectures > 0 && (progressData?.lectureCompleted?.length || 0) < totalLectures && completedLectures === totalLectures) {
          toast.success('Course completed. Your certificate is ready.')
        }
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  const getCourseProgress = async () => {

    try {

      const token = await getToken()

      const { data } = await axios.post(backendUrl + '/api/user/get-course-progress',
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        setProgressData(data.progressData)
        return data.progressData
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  const submitQuiz = () => {
    const score = quizQuestions.reduce((total, question) => (
      quizAnswers[question.id] === question.answer ? total + 1 : total
    ), 0)

    setQuizScore(score)
  }

  const handleRate = async (rating) => {

    try {

      const token = await getToken()

      const { data } = await axios.post(backendUrl + '/api/user/add-rating',
        { courseId, rating },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        toast.success(data.message)
        fetchUserEnrolledCourses()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {

    getCourseProgress()

  }, [])

  return courseData ? (
    <>
    
    <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36' >
      <div className=" text-gray-800 dark:text-gray-100" >
        <h2 className="text-xl font-semibold">Course Structure</h2>
        <div className="pt-5">
          {courseData && courseData.courseContent.map((chapter, index) => (
            <div key={index} className="border border-[var(--color-border)] bg-[var(--color-card)] mb-2 rounded transition-colors duration-300">
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center gap-2">
                  <img src={assets.down_arrow_icon} alt="arrow icon" className={`transform transition-transform ${openSections[index] ? "rotate-180" : ""}`} />
                  <p className="font-medium md:text-base text-sm">{chapter.chapterTitle}</p>
                </div>
                <p className="text-sm md:text-default">{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? "max-h-96" : "max-h-0"}`} >
                <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 dark:text-gray-300 border-t border-[var(--color-border)]">
                  {chapter.chapterContent.map((lecture, i) => (
                    <li key={i} className="flex items-start gap-2 py-1">
                      <img src={progressData && progressData.lectureCompleted.includes(lecture.lectureId) ? assets.blue_tick_icon : assets.play_icon} alt="bullet icon" className="w-4 h-4 mt-1" />
                      <div className="flex items-center justify-between w-full text-gray-800 dark:text-gray-100 text-xs md:text-default">
                        <p>{lecture.lectureTitle}</p>
                        <div className='flex gap-2'>
                          {lecture.lectureUrl && <p onClick={() => setPlayerData({ ...lecture, chapter: index + 1, lecture: i + 1 })} className='text-blue-500 cursor-pointer'>Watch</p>}
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

        <div className=" flex items-center gap-2 py-3 mt-10">
          <h1 className="text-xl font-bold">Rate this Course:</h1>
          <Rating initialRating={initialRating} onRate={handleRate} />
        </div>

        {quizQuestions.length > 0 && (
          <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Quick Quiz</h3>
            <div className="mt-4 space-y-4">
              {quizQuestions.map((question, index) => (
                <div key={question.id}>
                  <p className="font-medium text-gray-700 dark:text-gray-200">{index + 1}. {question.question}</p>
                  <div className="mt-2 grid gap-2">
                    {question.options.map((option) => (
                      <label key={option} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <input
                          type="radio"
                          name={question.id}
                          checked={quizAnswers[question.id] === option}
                          onChange={() => setQuizAnswers((prev) => ({ ...prev, [question.id]: option }))}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button onClick={submitQuiz} className="rounded bg-blue-600 px-4 py-2 text-sm text-white">Submit Quiz</button>
              {quizScore !== null && <p className="text-sm text-gray-600 dark:text-gray-300">Score: {quizScore} / {quizQuestions.length}</p>}
            </div>
          </div>
        )}

      </div>

      <div className='md:mt-10'>
        {
          playerData
            ? (
              <div>
                <YouTube iframeClassName='w-full aspect-video' videoId={playerData.lectureUrl.split('/').pop()} />
                <div className='flex justify-between items-center mt-1'>
                  <p className='text-xl '>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                  <button onClick={() => markLectureAsCompleted(playerData.lectureId)} className='text-blue-600'>{progressData && progressData.lectureCompleted.includes(playerData.lectureId) ? 'Completed' : 'Mark Complete'}</button>
                </div>
              </div>
            )
            : <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
        }
      </div>
    </div>
    <Footer />
    </>
  ) : <Loading />
}

export default Player
