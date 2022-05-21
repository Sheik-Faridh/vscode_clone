import { VscChevronRight, VscNewFile, VscSaveAll, VscCloseAll, VscEditorLayout } from 'react-icons/vsc';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAccordion } from '@hooks';

const OpenEditors = () => {
  const { expanded, handleChange } = useAccordion();
  return (
    <Accordion expanded={expanded} onChange={handleChange} disableGutters square>
      <AccordionSummary expandIcon={<VscChevronRight />}>
        <Typography variant="body2">Open Editors</Typography>
        <Box>
          <Tooltip title="New Untitled File" placement="bottom">
            <IconButton size="small">
              <VscNewFile />
            </IconButton>
          </Tooltip>
          <Tooltip title="Toggle Vertical/Horizontal Layout" placement="bottom">
            <IconButton size="small">
              <VscEditorLayout />
            </IconButton>
          </Tooltip>
          <Tooltip title="Save All" placement="bottom">
            <IconButton size="small">
              <VscSaveAll />
            </IconButton>
          </Tooltip>
          <Tooltip title="Close All" placement="bottom">
            <IconButton size="small">
              <VscCloseAll />
            </IconButton>
          </Tooltip>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="not-found-info-wrapper">
          <Typography variant="body2">There is no open files</Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default OpenEditors;