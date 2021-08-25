import {Stack, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import HeroSection from '../components/Hero';
import firebase from '../helpers/firebase';

const AuthPage = () => {
  const router = useRouter();

  const to = router.query.to as string;

  const uiConfig = {
    // Auth will return the user to where they came from
    signInSuccessUrl: to || '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

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
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Stack>
    </main>
  );
};

export default AuthPage;
