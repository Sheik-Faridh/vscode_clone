import { styled } from '@mui/material/styles';
import { VscChevronRight } from 'react-icons/vsc';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { useAccordion } from '@hooks';
import accordionStyles from './index.styles';

const AccordionStyled = styled(MuiAccordion)`
  ${accordionStyles}
`;

const Accordion = ({ children }: AccordionProps) => {
  const { expanded, handleChange } = useAccordion();
  return (
    <AccordionStyled expanded={expanded} onChange={handleChange} disableGutters square>
      {children}
    </AccordionStyled>
  );
};

const AccordionSummary: React.FC<AccordionSummaryProps> = ({ children }) => {
  return <MuiAccordionSummary expandIcon={<VscChevronRight />}>{children}</MuiAccordionSummary>;
};

Accordion.Summary = AccordionSummary;
Accordion.Details = MuiAccordionDetails;

export default Accordion;
