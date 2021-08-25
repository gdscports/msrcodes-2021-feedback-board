import {Box, Typography} from '@material-ui/core';

import Link from '../Link';

const Footer = () => (
  <Box
    sx={{bgcolor: 'primary.main', color: 'primary.contrastText', p: 6}}
    component="footer"
  >
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography variant="subtitle1" align="center" component="p">
      Something here to give the footer a purpose!
    </Typography>
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);

export default Footer;
