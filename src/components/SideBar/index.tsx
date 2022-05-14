import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { VscEllipsis } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SideBarAccordions from '@components/SideBarAccordions';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const SideBar = () => {
  const ref = useRef<Element>();
  return (
    <Container ref={ref}>
      <Drawer variant="temporary" anchor="left" open={true} container={ref.current}>
        <Box className="header">
          <Tooltip title="Explorer" placement="bottom">
            <Typography variant="caption">Explorer</Typography>
          </Tooltip>
          <Tooltip title="Views and more Actions...">
            <IconButton size="small">
              <VscEllipsis />
            </IconButton>
          </Tooltip>
        </Box>
        <SideBarAccordions />
      </Drawer>
    </Container>
  );
};

export default SideBar;
