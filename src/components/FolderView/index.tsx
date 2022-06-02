import { ElementRef, MouseEvent, useRef } from 'react';
import { VscCollapseAll, VscNewFile, VscNewFolder, VscRefresh } from 'react-icons/vsc';
import Accordion from '@atoms/Accordion';
import Box from '@mui/material/Box';
import FolderTree from '@components/FolderTree';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useExplorerAccordion } from '@hooks';
import { ExplorerActivity } from '@models';

const FolderView = () => {
  const { accordionHeight, handleChange } = useExplorerAccordion(ExplorerActivity.folder_view);
  type FolderViewHandle = ElementRef<typeof FolderTree>;
  const ref = useRef<FolderViewHandle>();

  const handleCollapseAll = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    ref.current.collapseAll();
  };

  return (
    <Accordion onChange={handleChange}>
      <Accordion.Summary>
        <Typography variant="body2">{process.env.REPO}</Typography>
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
            <IconButton size="small" onClick={handleCollapseAll}>
              <VscCollapseAll />
            </IconButton>
          </Tooltip>
        </Box>
      </Accordion.Summary>
      <Accordion.Details tabIndex={0} sx={{ height: accordionHeight }}>
        <FolderTree ref={ref} />
      </Accordion.Details>
    </Accordion>
  );
};

export default FolderView;
