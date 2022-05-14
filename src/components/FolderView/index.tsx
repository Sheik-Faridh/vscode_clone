import { VscChevronRight, VscCollapseAll, VscNewFile, VscNewFolder, VscRefresh } from 'react-icons/vsc';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAccordion } from '@hooks';

const FolderView = () => {
  const { expanded, handleChange } = useAccordion();
  return (
    <Accordion expanded={expanded} onChange={handleChange} disableGutters square>
      <AccordionSummary expandIcon={<VscChevronRight />}>
        <Typography variant="body2">VSCode_clone</Typography>
        <Box>
          <Tooltip title="New Untitled File" placement="bottom">
            <IconButton size="small">
              <VscNewFile />
            </IconButton>
          </Tooltip>
          <Tooltip title="New Folder" placement="bottom">
            <IconButton size="small">
              <VscNewFolder />
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh Explorer" placement="bottom">
            <IconButton size="small">
              <VscRefresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Collapse Folders in Explorer" placement="bottom">
            <IconButton size="small">
              <VscCollapseAll />
            </IconButton>
          </Tooltip>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Not Implemented yet</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FolderView;
