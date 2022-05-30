import { VscFilter, VscPin, VscRefresh } from 'react-icons/vsc';
import Accordion from '@atoms/Accordion';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useExplorerAccordion } from '@hooks';
import { ExplorerActivity } from '@models';

const Timeline = () => {
  const { accordionHeight, handleChange } = useExplorerAccordion(ExplorerActivity.timeline);
  return (
    <Accordion onChange={handleChange}>
      <Accordion.Summary>
        <Typography variant="body2">Timeline</Typography>
        <Box>
          <Tooltip title="Pin the Current Timeline" placement="bottom">
            <IconButton size="small">
              <VscPin />
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh" placement="bottom">
            <IconButton size="small">
              <VscRefresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter Timeline" placement="bottom">
            <IconButton size="small">
              <VscFilter />
            </IconButton>
          </Tooltip>
        </Box>
      </Accordion.Summary>
      <Accordion.Details sx={{ height: accordionHeight }}>
        <Box className="not-found-info-wrapper">
          <Typography variant="body2">The active editor cannot provide timeline information</Typography>
        </Box>
      </Accordion.Details>
    </Accordion>
  );
};

export default Timeline;
