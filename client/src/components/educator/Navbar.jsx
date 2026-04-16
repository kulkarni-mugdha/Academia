import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {

  const { isEducator, theme, toggleTheme } = useContext(AppContext)
  const { user } = useUser()

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b border-[var(--color-border)] bg-[var(--color-card)] py-3 ${bgColor}`}>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>
      <div className="flex items-center gap-5 text-gray-500 dark:text-gray-300 relative">
        <button onClick={toggleTheme} className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-gray-700 dark:text-gray-100">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <p>Hi! {user.fullName}</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
