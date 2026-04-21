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
      if (!user) {
        navigate('/login?role=educator');
        return;
      }

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
        navigate('/educator');
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={`flex items-center justify-between gap-4 px-4 sm:px-10 md:px-14 lg:px-36 border-b py-4 transition-colors duration-300 ${
      isCoursesListPage
        ? 'bg-[var(--color-card)]'
        : 'bg-cyan-100/70 dark:bg-slate-900'
    } border-[var(--color-border)]`}>

      {/* LOGO */}
      <img
        onClick={() => navigate('/')}
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* DESKTOP NAVBAR */}
      <div className="hidden items-center gap-4 md:flex lg:gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        <button onClick={becomeEducator} className="hover:text-blue-600 transition">
          {isEducator ? 'Educator Dashboard' : 'Become Educator'}
        </button>

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm transition-all hover:border-blue-300 hover:text-blue-600"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* USER BUTTON */}
        {user ? (
          <UserButton afterSignOutUrl="/">
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Enrollments"
                labelIcon={<span className="text-xs font-semibold text-blue-600">ME</span>}
                href="/my-enrollments"
              />
              <UserButton.Link
                label="Wishlist"
                labelIcon={<span className="text-xs font-semibold text-blue-600">WL</span>}
                href="/wishlist"
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="rounded-full bg-blue-600 px-5 py-2 text-white transition-all hover:bg-blue-700"
          >
            Create Account
          </button>
        )}

      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex items-center gap-2 md:hidden text-xs font-medium text-gray-700 dark:text-gray-200">
        <div className="flex items-center gap-3">
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <button onClick={becomeEducator} className="hover:text-blue-600 transition">
            {isEducator ? 'Dashboard' : 'Educator'}
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-full border border-[var(--color-border)] px-2.5 py-1 transition-all hover:border-blue-300 hover:text-blue-600"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>

        {user ? (
          <UserButton afterSignOutUrl="/">
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Enrollments"
                labelIcon={<span className="text-[10px] font-semibold text-blue-600">ME</span>}
                href="/my-enrollments"
              />
              <UserButton.Link
                label="Wishlist"
                labelIcon={<span className="text-[10px] font-semibold text-blue-600">WL</span>}
                href="/wishlist"
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button onClick={() => navigate('/login')}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}

      </div>

    </div>
  );
};

export default Navbar;
