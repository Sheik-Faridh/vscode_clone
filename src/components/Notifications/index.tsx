import { useState, MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import { VscBell, VscClearAll, VscChevronDown } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification-popper' : undefined;

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <VscBell />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="top-end">
        <Container>
          <Typography variant="body1">No New Notification</Typography>
          <Box>
            <IconButton size="small">
              <VscClearAll />
            </IconButton>
            <IconButton size="small" onClick={handleClose}>
              <VscChevronDown />
            </IconButton>
          </Box>
        </Container>
      </Popper>
    </>
  );
};

export default Notifications;
