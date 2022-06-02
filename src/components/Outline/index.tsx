import { VscCollapseAll, VscEllipsis } from 'react-icons/vsc';
import Accordion from '@atoms/Accordion';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useExplorerAccordion } from '@hooks';
import { ExplorerActivity } from '@models';

const Outline = () => {
  const { accordionHeight, handleChange } = useExplorerAccordion(ExplorerActivity.outline);
  return (
    <Accordion onChange={handleChange}>
      <Accordion.Summary>
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
      </Accordion.Summary>
      <Accordion.Details tabIndex={0} sx={{ height: accordionHeight }}>
        <Box className="not-found-info-wrapper">
          <Typography variant="body2">The active editor cannot provide outline information</Typography>
        </Box>
      </Accordion.Details>
    </Accordion>
  );
};

export default Outline;
