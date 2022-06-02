import { FC, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import FileIcon from '@components/FileIcon';
import Menu from '@atoms/Menu';
import TreeView from '@atoms/TreeView';
import { useBreadcrumb, useTreeView } from '@hooks';
import { EditorStore } from '@store';
import { FileType } from '@models';
import { sortTreeView } from '@utils/helper';
import containerStyles, { menuStyles } from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const StyledMenu = styled(Menu)`
  ${menuStyles}
`;

const Breadcrumb: FC = () => {
  const { fileTraverseList, handleClick, anchorEl, handleClose, open, parentNode } = useBreadcrumb();

  const handleTreeItemClick = (id: string, type: FileType) => () => {
    if (type === 'blob') {
      EditorStore.openFile(id);
      handleMenuClose();
    }
  };

  const { expanded, handleNodeToggle, renderTree, filesList, setExpanded } = useTreeView(handleTreeItemClick);

  const rootList = useMemo(
    () => sortTreeView(filesList.filter((file) => file.parent === parentNode)),
    [filesList, parentNode],
  );

  const handleMenuClose = () => {
    setExpanded([]);
    handleClose();
  };

  return (
    <Container>
      <Breadcrumbs separator={<VscChevronRight fontSize="small" />} aria-label="breadcrumb">
        {fileTraverseList.map((node) => (
          <Button
            size="small"
            variant="text"
            key={node.id}
            startIcon={node.type === 'blob' ? <FileIcon name={node.name} /> : null}
            onClick={handleClick(node.parentNode)}
          >
            {node.name}
          </Button>
        ))}
      </Breadcrumbs>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <TreeView
          expanded={expanded}
          onNodeToggle={handleNodeToggle}
          defaultCollapseIcon={<VscChevronDown />}
          defaultExpandIcon={<VscChevronRight />}
        >
          {rootList.map(renderTree)}
        </TreeView>
      </StyledMenu>
    </Container>
  );
};

export default Breadcrumb;
