import {CircularProgress, Stack, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {useAuthState} from 'react-firebase-hooks/auth';

import HeroSection from '../components/Hero';
import firebase from '../helpers/firebase';

const AuthPage = () => {
  const router = useRouter();

  // Build config for StyledFirebaseAuth
  const to = router.query.to as string;
  const uiConfig = {
    // Auth will return the user to where they came from
    signInSuccessUrl: to || '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  // If user is already logged in, redirect them to the homepage
  const [user, loading] = useAuthState(firebase.auth());
  if (user) {
    router.push('/');
  }

  return (
    <main>
      <HeroSection>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Please sign-in
        </Typography>
      </HeroSection>
      <Stack sx={{m: 8}}>
        {loading ? (
          <CircularProgress />
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </Stack>
    </main>
  );
};

export default AuthPage;
