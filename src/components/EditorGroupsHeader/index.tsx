import { styled } from '@mui/material/styles';
import { VscGitCompare, VscEllipsis, VscSplitHorizontal } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const EditorGroupsHeader = () => {
  return (
    <Container>
      <Box></Box>
      <Box className="icon-wrapper">
        <Tooltip title="Open Changes" placement="bottom">
          <IconButton size="small">
            <VscGitCompare />
          </IconButton>
        </Tooltip>
        <Tooltip title="Split Editor Right" placement="bottom">
          <IconButton size="small">
            <VscSplitHorizontal />
          </IconButton>
        </Tooltip>
        <Tooltip title="More Actions..." placement="bottom">
          <IconButton size="small">
            <VscEllipsis />
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default EditorGroupsHeader;
