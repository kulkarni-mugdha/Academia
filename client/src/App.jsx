import React, { useContext } from 'react'
import { Navigate, Routes, Route, useLocation, useMatch } from 'react-router-dom'
import Navbar from './components/student/Navbar'
import Home from './pages/student/Home'
import CourseDetails from './pages/student/CourseDetails'
import CoursesList from './pages/student/CoursesList'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Educator from './pages/educator/Educator'
import 'quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Player from './pages/student/Player'
import MyEnrollments from './pages/student/MyEnrollments'
import Loading from './components/student/Loading'
import Wishlist from './pages/student/Wishlist'
import Chatbot from './components/student/Chatbot'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import { AppContext } from './context/AppContext';
import { useAuth, useUser } from '@clerk/clerk-react';

const ProtectedRoute = ({ children, educatorOnly = false }) => {
  const location = useLocation();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { isEducator } = useContext(AppContext);

  if (!isLoaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 text-center text-base font-medium text-gray-600 dark:text-gray-300">
        {educatorOnly ? 'Loading dashboard...' : 'Loading...'}
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (educatorOnly && !(isEducator || user?.publicMetadata?.role === 'educator')) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className="text-default min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <ToastContainer />
      {/* Render Student Navbar only if not on educator routes */}
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route
          path="/checkout/:courseId"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route
          path="/my-enrollments"
          element={
            <ProtectedRoute>
              <MyEnrollments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/player/:courseId"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
        <Route path="/loading/:path" element={<Loading />} />
        <Route
          path='/educator'
          element={
            <ProtectedRoute educatorOnly>
              <Educator />
            </ProtectedRoute>
          }
        >
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
      <Chatbot />
    </div>
  )
}

export default App
