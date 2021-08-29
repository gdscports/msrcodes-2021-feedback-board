import {useAuthState} from 'react-firebase-hooks/auth';
import {useRouter} from 'next/router';

import firebase from './firebase';

interface AuthResponse {
  isAuthed: boolean;
  message?: string;
}

const useAuth = (): AuthResponse => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter();

  // If auth is still waiting, wait
  if (loading) return {isAuthed: false, message: 'Loading user...'};

  // If there is an error in auth, display error
  if (error) return {isAuthed: false, message: `Error. ${error}`};

  // If loaded without errors, and user is not logged in, redirect to auth
  if (!user && router.pathname !== '/auth') {
    router.push({pathname: '/auth', query: {to: router.asPath}});
    return {
      isAuthed: false,
      message: 'User is not logged in. Redirecting to login page...',
    };
  }

  return {isAuthed: true};
};

export default useAuth;
