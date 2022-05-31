import { styled } from '@mui/material/styles';
import { VscEllipsis } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const RunAndDebug = () => {
  return (
    <Container>
      <Box className="header">
        <Tooltip title="Run and Debug: Run (Ctrl+Shift+D)" placement="bottom">
          <Typography variant="caption">Run And Debug: Run</Typography>
        </Tooltip>
        <Box>
          <Tooltip title="Views and more Actions...">
            <IconButton size="small">
              <VscEllipsis />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2">
          <Link underline="none">Open a file</Link> which can be debugged or run
        </Typography>
        <Button fullWidth variant="contained" color="primary">
          Run and Debug
        </Button>
        <Typography variant="body2">
          To customize Run and Debug
          <Link underline="none"> create a launch.json file.</Link>
        </Typography>
        <Link underline="none">Show all automatic debug configuration</Link>
      </Box>
    </Container>
  );
};

export default RunAndDebug;
