import {PropsWithChildren} from 'react';

import {Box, Container} from '@material-ui/core';

const Hero = ({children}: PropsWithChildren<{}>) => (
  <Box
    sx={{
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="sm">{children}</Container>
  </Box>
);

export default Hero;
