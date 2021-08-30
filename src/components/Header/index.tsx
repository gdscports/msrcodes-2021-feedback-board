import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => (
  <AppBar position="relative">
    <Toolbar>
      <CameraIcon sx={{mr: 2}} />
      <Typography variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
