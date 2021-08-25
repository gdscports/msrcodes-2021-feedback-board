import {Typography} from '@material-ui/core';

import HeroSection from '../components/Hero';

const Homepage = () => (
  <main>
    <HeroSection>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Next.js Boilerplate!
      </Typography>
    </HeroSection>
  </main>
);

export default Homepage;
