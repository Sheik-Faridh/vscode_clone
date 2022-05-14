import { styled } from '@mui/material/styles';
import { VscClose, VscChromeMaximize } from 'react-icons/vsc';
import AppBar from '@mui/material/AppBar';
import AppToolBar from '@components/AppToolBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
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
      <Box>
        <IconButton size="small">
          <VscChromeMaximize />
        </IconButton>
        <IconButton size="small">
          <VscClose />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBarStyled>
);

export default AppHeader;
