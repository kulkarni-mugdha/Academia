import React, { useContext, useEffect } from 'react';
import { useClerk, useUser } from '@clerk/clerk-react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const loginOptions = [
  {
    id: 'student',
    title: 'Continue as Student',
    description: 'Browse courses, manage your wishlist, and keep learning progress in one place.'
  },
  {
    id: 'educator',
    title: 'Continue as Educator',
    description: 'Access your educator tools and manage your teaching workflow after sign-in.'
  }
];

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();
  const { isEducator } = useContext(AppContext);

  const intendedRole = searchParams.get('role');
  const from = location.state?.from;

  useEffect(() => {
    if (!isSignedIn) return;

    if (isEducator) {
      navigate('/educator', { replace: true });
      return;
    }

    if (from && !from.startsWith('/educator')) {
      navigate(from, { replace: true });
      return;
    }

    navigate('/', { replace: true });
  }, [from, isEducator, isSignedIn, navigate]);

  const handleSignIn = async (role) => {
    await openSignIn({
      afterSignInUrl: role === 'educator' ? '/login?role=educator' : '/login',
      afterSignUpUrl: role === 'educator' ? '/login?role=educator' : '/login'
    });
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-b from-cyan-100/70 via-transparent to-transparent px-6 py-14 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      <div className="w-full max-w-5xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Welcome to Academia</p>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Choose how you want to continue
          </h1>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            Sign in to keep your learning, wishlist, and educator experience connected.
          </p>
          {intendedRole === 'educator' && (
            <p className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-300">
              Educator access will open automatically if your account already has educator privileges.
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {loginOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSignIn(option.id)}
              className="group rounded-2xl border border-[var(--color-border)] bg-white/80 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 dark:bg-slate-900/60 dark:hover:border-blue-500/40 dark:hover:shadow-blue-950/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-lg font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {option.id === 'student' ? 'S' : 'E'}
              </div>
              <h2 className="mt-5 text-xl font-semibold text-gray-900 dark:text-gray-100">{option.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{option.description}</p>
              <span className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:bg-blue-700">
                Open Clerk Sign In
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
