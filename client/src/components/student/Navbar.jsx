import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {

  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');

  const {
    backendUrl,
    isEducator,
    setIsEducator,
    navigate,
    getToken,
    theme,
    toggleTheme
  } = useContext(AppContext);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();

      const { data } = await axios.get(
        backendUrl + '/api/educator/update-role',
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b py-4 transition-colors duration-300 ${
      isCoursesListPage
        ? 'bg-[var(--color-card)]'
        : 'bg-cyan-100/70 dark:bg-slate-900'
    } border-[var(--color-border)]`}>

      {/* LOGO */}
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* DESKTOP NAVBAR */}
      <div className="md:flex hidden items-center gap-5 text-gray-700 dark:text-gray-200">

        {/* NEW LINKS */}
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>

        {/* USER LINKS */}
        {user && (
          <>
            <button onClick={becomeEducator}>
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>

            <span>|</span>

            <Link to="/my-enrollments">My Enrollments</Link>

            <span>|</span>

            <Link to="/wishlist">Wishlist</Link>
          </>
        )}

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* USER BUTTON */}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}

      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex items-center gap-2 text-gray-700 dark:text-gray-200">

        <div className="flex items-center gap-2 text-xs">

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <button onClick={becomeEducator}>
            {isEducator ? 'Dashboard' : 'Educator'}
          </button>

          {user && <Link to="/my-enrollments">Enrollments</Link>}
          {user && <Link to="/wishlist">Wishlist</Link>}
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-full border px-2 py-1 text-xs"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>

        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}

      </div>

    </div>
  );
};

export default Navbar;