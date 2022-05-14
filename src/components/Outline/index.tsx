import { VscChevronRight, VscCollapseAll, VscEllipsis } from 'react-icons/vsc';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAccordion } from '@hooks';

const Outline = () => {
  const { expanded, handleChange } = useAccordion();
  return (
    <Accordion expanded={expanded} onChange={handleChange} disableGutters square>
      <AccordionSummary expandIcon={<VscChevronRight />}>
        <Typography variant="body2">Outline</Typography>
        <Box>
          <Tooltip title="Collapse All" placement="bottom">
            <IconButton size="small">
              <VscCollapseAll />
            </IconButton>
          </Tooltip>
          <Tooltip title="More Actions..." placement="bottom">
            <IconButton size="small">
              <VscEllipsis />
            </IconButton>
          </Tooltip>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="not-found-info-wrapper">
          <Typography variant="body2">The active editor cannot provide outline information</Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Outline;
