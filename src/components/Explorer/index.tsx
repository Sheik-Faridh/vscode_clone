import { VscEllipsis } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ExplorerAccordions from '@components/ExplorerAccordions';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Explorer = () => {
  return (
    <Box>
      <Box className="header">
        <Tooltip title="Explorer" placement="bottom">
          <Typography variant="caption">Explorer</Typography>
        </Tooltip>
        <Box>
          <Tooltip title="Views and more Actions...">
            <IconButton size="small">
              <VscEllipsis />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <ExplorerAccordions />
    </Box>
  );
};

export default Explorer;
