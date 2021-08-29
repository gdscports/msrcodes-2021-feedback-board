import {Box, Typography} from '@material-ui/core';

import Link from '../Link';

const Footer = () => (
  <Box
    sx={{bgcolor: 'primary.main', color: 'primary.contrastText', p: 6}}
    component="footer"
  >
    <Typography variant="h6" align="center" gutterBottom>
      Made by{' '}
      <Link color="inherit" href="https://msr.codes/">
        msr.codes
      </Link>{' '}
      for{' '}
      <Link
        color="inherit"
        href="https://gdsc.community.dev/university-of-portsmouth"
      >
        GDSC University of Portsmouth
      </Link>
    </Typography>
    <Typography variant="subtitle1" align="center" component="p">
      Check the source on{' '}
      <Link
        color="inherit"
        href="https://github.com/gdscports/msrcodes-2021-feedback-board"
      >
        GitHub
      </Link>
    </Typography>
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://msr.codes/">
        msr.codes
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  </Box>
);

export default Footer;
