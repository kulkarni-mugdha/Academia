import Course from "../models/Course.js"
import { mockCourses } from "../data/mockCourses.js"


// Get All Courses
export const getAllCourse = async (req, res) => {
    try {
        if (Course.db.readyState !== 1) {
            return res.json({ success: true, courses: mockCourses })
        }

        const courses = await Course.find({ isPublished: true })
            .select(['-courseContent', '-enrolledStudents'])
            .populate({ path: 'educator', select: '-password' })

        res.json({ success: true, courses: [...mockCourses, ...courses] })

    } catch (error) {
        console.log(`Falling back to mock courses: ${error.message}`)
        res.json({ success: true, courses: mockCourses })
    }

}

// Get Course by Id
export const getCourseId = async (req, res) => {

    const { id } = req.params

    try {
        const mockCourse = mockCourses.find((course) => course._id === id)

        if (mockCourse) {
            return res.json({ success: true, courseData: mockCourse })
        }

        if (Course.db.readyState !== 1) {
            return res.json({ success: false, message: 'Database unavailable' })
        }

        const courseData = await Course.findById(id)
            .populate({ path: 'educator'})

        // Remove lectureUrl if isPreviewFree is false
        courseData.courseContent.forEach(chapter => {
            chapter.chapterContent.forEach(lecture => {
                if (!lecture.isPreviewFree) {
                    lecture.lectureUrl = "";
                }
            });
        });

        res.json({ success: true, courseData })

    } catch (error) {
        console.log(`Failed to fetch course by id: ${error.message}`)
        res.json({ success: false, message: error.message })
    }

} 
