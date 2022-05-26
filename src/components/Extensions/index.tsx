import { styled } from '@mui/material/styles';
import { VscEllipsis, VscFilter, VscRefresh, VscClearAll } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const Extensions = () => {
  return (
    <Container>
      <Box className="header">
        <Tooltip title="Extensions" placement="bottom">
          <Typography variant="caption">Extensions</Typography>
        </Tooltip>
        <Box>
          <Tooltip title="Filter Extensions...">
            <IconButton size="small">
              <VscFilter />
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh">
            <IconButton size="small">
              <VscRefresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Clear Extension Search Results">
            <IconButton size="small">
              <VscClearAll />
            </IconButton>
          </Tooltip>
          <Tooltip title="Views and more Actions...">
            <IconButton size="small">
              <VscEllipsis />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Extensions;
