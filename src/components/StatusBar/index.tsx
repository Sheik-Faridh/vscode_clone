import { Fragment, useEffect, useState } from 'react';
import { VscSync, VscError, VscWarning, VscJson, VscBroadcast, VscCheck, VscFeedback, VscBell } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import { StatusBarState } from '@models';
import { StatusBarStore } from '@store';

const StatusBar = () => {
  const [state, setState] = useState<StatusBarState>({} as StatusBarState);

  useEffect(() => {
    const store = StatusBarStore.subject.subscribe((v) => {
      setState(v);
    });

    return () => store.unsubscribe();
  }, []);

  return (
    <Fragment>
      <Box>
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
        {!!state.lineNumber && (
          <Button color="inherit" size="small">
            Ln {state.lineNumber},Col {state.column}
          </Button>
        )}
        <Button color="inherit" size="small">
          Spaces: 2
        </Button>
        <Button color="inherit" size="small">
          UTF-8
        </Button>
        <Button color="inherit" size="small">
          LF
        </Button>
        {!!state.fileType && (
          <Button color="inherit" size="small" startIcon={<VscJson />} sx={{ textTransform: 'capitalize' }}>
            {state.fileType}
          </Button>
        )}
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
