import { VscChevronRight, VscFilter, VscPin, VscRefresh } from 'react-icons/vsc';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAccordion } from '@hooks';

const Timeline = () => {
  const { expanded, handleChange } = useAccordion();
  return (
    <Accordion expanded={expanded} onChange={handleChange} disableGutters square>
      <AccordionSummary expandIcon={<VscChevronRight />}>
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
      </AccordionSummary>
      <AccordionDetails>
        <Box className="not-found-info-wrapper">
          <Typography variant="body2">The active editor cannot provide timeline information</Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Timeline;
