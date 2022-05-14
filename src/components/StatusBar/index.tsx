import { Fragment } from 'react';
import {
  VscGitMerge,
  VscSync,
  VscError,
  VscWarning,
  VscJson,
  VscBroadcast,
  VscCheck,
  VscFeedback,
  VscBell,
} from 'react-icons/vsc';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

const StatusBar = () => {
  return (
    <Fragment>
      <Box>
        <Button color="inherit" size="small" startIcon={<VscGitMerge />}>
          main*
        </Button>
        <IconButton size="small">
          <VscSync />
        </IconButton>
        <ButtonGroup variant="text">
          <Button color="inherit" size="small" startIcon={<VscError />}>
            0
          </Button>
          <Button color="inherit" size="small" startIcon={<VscWarning />}>
            0
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Button color="inherit" size="small">
          Ln 34,Col 20
        </Button>
        <Button color="inherit" size="small">
          Spaces: 2
        </Button>
        <Button color="inherit" size="small">
          UTF-8
        </Button>
        <Button color="inherit" size="small">
          LF
        </Button>
        <Button color="inherit" size="small" startIcon={<VscJson />}>
          TypeScript React
        </Button>
        <Button color="inherit" size="small" startIcon={<VscBroadcast />}>
          Go Live
        </Button>
        <Button color="inherit" size="small" startIcon={<VscCheck />}>
          Prettier
        </Button>
        <IconButton size="small">
          <VscFeedback />
        </IconButton>
        <IconButton size="small">
          <VscBell />
        </IconButton>
      </Box>
    </Fragment>
  );
};

export default StatusBar;
