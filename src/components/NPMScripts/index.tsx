import { VscChevronRight } from 'react-icons/vsc';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useAccordion } from '@hooks';

const NPMScripts = () => {
  const { expanded, handleChange } = useAccordion();
  return (
    <Accordion expanded={expanded} onChange={handleChange} disableGutters square>
      <AccordionSummary expandIcon={<VscChevronRight />}>
        <Typography variant="body2">NPM Scripts</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Not Implemented yet</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default NPMScripts;
