import { styled } from '@mui/material/styles';
import { VscEllipsis } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ExplorerAccordions from '@components/ExplorerAccordions';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const Explorer = () => {
  return (
    <Container>
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
      <ExplorerAccordions />
    </Container>
  );
};

export default Explorer;
