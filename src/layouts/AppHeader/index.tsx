import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import AppToolBar from '@components/AppToolBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HeaderActions from '@components/HeaderActions';
import LogoIcon from '@assets/svg/logo.svg';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import appHeaderStyles from './index.styles';

const AppBarStyled = styled(AppBar)`
  ${appHeaderStyles}
`;

const AppHeader = () => (
  <AppBarStyled position="static">
    <Toolbar>
      <Box>
        <IconButton disableRipple>
          <LogoIcon />
        </IconButton>
        <AppToolBar />
      </Box>
      <Box>
        <Typography variant="button">Welcome - Visual Studio Code</Typography>
      </Box>
      <HeaderActions />
    </Toolbar>
  </AppBarStyled>
);

export default AppHeader;
