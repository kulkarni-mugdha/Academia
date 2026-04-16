import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../components/student/Loading';

const MyCourses = () => {

  const { backendUrl, isEducator, getToken, calculateDiscountedPrice, formatPrice } = useContext(AppContext)

  const [courses, setCourses] = useState(null)
  const [editingCourse, setEditingCourse] = useState(null)
  const [editForm, setEditForm] = useState({ courseTitle: '', coursePrice: 0, discount: 0, isPublished: true })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchEducatorCourses = async () => {

    try {
      setLoading(true)
      setError('')

      const token = await getToken()

      const { data } = await axios.get(backendUrl + '/api/educator/courses', { headers: { Authorization: `Bearer ${token}` } })
      console.log('Educator courses API response:', data)

      if (data.success) {
        setCourses(Array.isArray(data.courses) ? data.courses : [])
      } else {
        setCourses([])
        setError(data.message)
        toast.error(data.message)
      }

    } catch (error) {
      console.log('Educator courses fetch failed:', error)
      setCourses([])
      setError(error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }

  }

  const openEditModal = (course) => {
    setEditingCourse(course)
    setEditForm({
      courseTitle: course.courseTitle,
      coursePrice: course.coursePrice,
      discount: course.discount,
      isPublished: course.isPublished,
    })
  }

  const updateCourse = async () => {
    try {
      const token = await getToken()

      const { data } = await axios.post(
        backendUrl + '/api/educator/update-course',
        {
          courseId: editingCourse._id,
          updates: {
            ...editForm,
            coursePrice: Number(editForm.coursePrice),
            discount: Number(editForm.discount),
          }
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        toast.success(data.message)
        setEditingCourse(null)
        fetchEducatorCourses()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteCourse = async (courseId) => {
    try {
      if (!window.confirm('Delete this course? This will also remove related progress and purchase records.')) {
        return
      }

      const token = await getToken()

      const { data } = await axios.post(
        backendUrl + '/api/educator/delete-course',
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        toast.success(data.message)
        fetchEducatorCourses()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses()
    } else {
      setCourses([])
      setLoading(false)
    }
  }, [isEducator])

  if (loading) return <Loading />

  return courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className='w-full'>
        <h2 className="pb-4 text-lg font-medium text-gray-800 dark:text-gray-100">My Courses</h2>
        {error && <p className='pb-4 text-sm text-red-500'>{error}</p>}
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-[var(--color-card)] border border-[var(--color-border)]">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 dark:text-gray-100 border-b border-[var(--color-border)] text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
                <th className="px-4 py-3 font-semibold truncate">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500 dark:text-gray-300">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-[var(--color-border)]">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img src={course.courseThumbnail} alt="Course Image" className="w-16" />
                    <span className="truncate hidden md:block">{course.courseTitle}</span>
                  </td>
                  <td className="px-4 py-3">{formatPrice(course.enrolledStudents.length * calculateDiscountedPrice(course.coursePrice, course.discount))}</td>
                  <td className="px-4 py-3">{course.enrolledStudents.length}</td>
                  <td className="px-4 py-3">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className='flex gap-3 text-xs'>
                      <button onClick={() => openEditModal(course)} className='text-blue-600 dark:text-blue-300'>Edit</button>
                      <button onClick={() => deleteCourse(course._id)} className='text-red-500'>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {courses.length === 0 && <p className='w-full p-6 text-center text-sm text-gray-500 dark:text-gray-300'>No courses found for this educator yet.</p>}
        </div>
      </div>
      {editingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-[var(--color-card)] p-6 shadow-lg">
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>Edit Course</h3>
            <div className='mt-4 grid gap-4 text-sm text-gray-600 dark:text-gray-300'>
              <input value={editForm.courseTitle} onChange={(e) => setEditForm({ ...editForm, courseTitle: e.target.value })} className='rounded border border-[var(--color-border)] bg-transparent px-3 py-2 outline-none' />
              <input value={editForm.coursePrice} onChange={(e) => setEditForm({ ...editForm, coursePrice: e.target.value })} type='number' min='0' className='rounded border border-[var(--color-border)] bg-transparent px-3 py-2 outline-none' />
              <input value={editForm.discount} onChange={(e) => setEditForm({ ...editForm, discount: e.target.value })} type='number' min='0' max='100' className='rounded border border-[var(--color-border)] bg-transparent px-3 py-2 outline-none' />
              <label className='flex items-center gap-2'>
                <input type='checkbox' checked={editForm.isPublished} onChange={(e) => setEditForm({ ...editForm, isPublished: e.target.checked })} />
                <span>Published</span>
              </label>
            </div>
            <div className='mt-5 flex justify-end gap-3'>
              <button onClick={() => setEditingCourse(null)} className='rounded border border-[var(--color-border)] px-4 py-2 text-sm text-gray-600 dark:text-gray-300'>Cancel</button>
              <button onClick={updateCourse} className='rounded bg-blue-600 px-4 py-2 text-sm text-white'>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : <Loading />
};

export default MyCourses;
