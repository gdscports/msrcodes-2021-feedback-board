import {EmotionCache} from '@emotion/cache';
import {CacheProvider, ThemeProvider} from '@emotion/react';
import {createTheme, CssBaseline, useMediaQuery} from '@material-ui/core';
import type {AppProps} from 'next/app';
import {useMemo} from 'react';

import createEmotionCache from '../helpers/createEmotionCache';
import useAnalytics from '../helpers/useAnalytics';
import useAuth from '../helpers/useAuth';

import Layout from '../components/Layout';

export interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: ExtendedAppProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  useAnalytics();

  // Ensure user is logged in
  const {isAuthed, message} = useAuth();

  if (!isAuthed) {
    return <>{message}</>;
  }

  // Otherwise, load page
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
