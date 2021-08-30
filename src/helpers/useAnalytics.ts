import {useEffect} from 'react';
import {useRouter} from 'next/router';

import firebase from './firebase';

const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url: string) => {
        firebase.analytics().setCurrentScreen(url);
        firebase.analytics().logEvent('screen_view');
      };

      router.events.on('routeChangeComplete', logEvent);

      // For first page in application
      logEvent(router.asPath);

      return () => {
        router.events.off('routeChangeComplete', logEvent);
      };
    } else {
      return () => {};
    }
  }, []);
};

export default useAnalytics;
