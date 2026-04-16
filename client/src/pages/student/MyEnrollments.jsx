import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer';
import { toast } from 'react-toastify';

const MyEnrollments = () => {

    const { userData, enrolledCourses, fetchUserEnrolledCourses, navigate, backendUrl, getToken, calculateCourseDuration, calculateNoOfLectures } = useContext(AppContext)

    const [progressArray, setProgressData] = useState([])

    const downloadCertificate = (courseTitle) => {
        if (!userData?.name) {
            toast.warn('Student name is not available yet.')
            return
        }

        const certificateWindow = window.open('', '_blank', 'width=900,height=700')

        if (!certificateWindow) {
            toast.error('Please allow popups to download the certificate.')
            return
        }

        certificateWindow.document.write(`
            <html>
                <head>
                    <title>Certificate of Completion</title>
                    <style>
                        body { font-family: Arial, sans-serif; background: #eff6ff; margin: 0; padding: 32px; }
                        .certificate { background: white; border: 12px solid #2563eb; padding: 48px; text-align: center; }
                        h1 { font-size: 42px; margin-bottom: 12px; color: #1e3a8a; }
                        h2 { font-size: 28px; margin: 18px 0; color: #0f172a; }
                        p { font-size: 18px; color: #334155; }
                    </style>
                </head>
                <body>
                    <div class="certificate">
                        <p>Certificate of Completion</p>
                        <h1>${userData.name}</h1>
                        <p>has successfully completed</p>
                        <h2>${courseTitle}</h2>
                        <p>Date: ${new Date().toLocaleDateString('en-IN')}</p>
                    </div>
                </body>
            </html>
        `)
        certificateWindow.document.close()
        certificateWindow.focus()
        certificateWindow.print()
    }

    const getCourseProgress = async () => {
        try {
            const token = await getToken();

            // Use Promise.all to handle multiple async operations
            const tempProgressArray = await Promise.all(
                enrolledCourses.map(async (course) => {
                    const { data } = await axios.post(
                        `${backendUrl}/api/user/get-course-progress`,
                        { courseId: course._id },
                        { headers: { Authorization: `Bearer ${token}` } }
                    );

                    // Calculate total lectures
                    let totalLectures = calculateNoOfLectures(course);

                    const lectureCompleted = data.progressData ? data.progressData.lectureCompleted.length : 0;
                    return { totalLectures, lectureCompleted };
                })
            );

            setProgressData(tempProgressArray);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (userData) {
            fetchUserEnrolledCourses()
        }
    }, [userData])

    useEffect(() => {

        if (enrolledCourses.length > 0) {
            getCourseProgress()
        }

    }, [enrolledCourses])

    return (
        <>

            <div className='md:px-36 px-8 pt-10'>

                <h1 className='text-2xl font-semibold text-gray-800 dark:text-gray-100'>My Enrollments</h1>

                <table className="md:table-auto table-fixed w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] mt-10">
                    <thead className="text-gray-900 dark:text-gray-100 border-b border-[var(--color-border)] text-sm text-left max-sm:hidden">
                        <tr>
                            <th className="px-4 py-3 font-semibold truncate">Course</th>
                            <th className="px-4 py-3 font-semibold truncate max-sm:hidden">Duration</th>
                            <th className="px-4 py-3 font-semibold truncate max-sm:hidden">Completed</th>
                            <th className="px-4 py-3 font-semibold truncate">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-200">
                        {enrolledCourses.map((course, index) => (
                            <tr key={index} className="border-b border-[var(--color-border)]">
                                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 ">
                                    <img src={course.courseThumbnail} alt="" className="w-14 sm:w-24 md:w-28" />
                                    <div className='flex-1'>
                                        <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                                        <Line className='bg-gray-300 rounded-full' strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0} />
                                    </div>
                                </td>
                                <td className="px-4 py-3 max-sm:hidden">{calculateCourseDuration(course)}</td>
                                <td className="px-4 py-3 max-sm:hidden">
                                    {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}
                                    <span className='text-xs ml-2'>Lectures</span>
                                </td>
                                <td className="px-4 py-3 max-sm:text-right">
                                    <button onClick={() => navigate('/player/' + course._id)} className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white'>
                                        {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 ? 'Completed' : 'On Going'}
                                    </button>
                                    {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 && (
                                        <button onClick={() => downloadCertificate(course.courseTitle)} className='mt-2 block text-xs text-blue-600 dark:text-blue-300'>
                                            Download Certificate
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <Footer />

        </>
    )
}

export default MyEnrollments
