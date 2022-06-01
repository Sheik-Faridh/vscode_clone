import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { VscChevronRight } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import FileIcon from '@components/FileIcon';
import { useBreadcrumb } from '@hooks';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const Breadcrumb: FC = () => {
  const { fileTraverseList } = useBreadcrumb();

  return (
    <Container>
      <Breadcrumbs separator={<VscChevronRight fontSize="small" />} aria-label="breadcrumb">
        {fileTraverseList.map((node) => (
          <Button
            size="small"
            variant="text"
            key={node.id}
            startIcon={node.type === 'blob' ? <FileIcon name={node.name} /> : null}
          >
            {node.name}
          </Button>
        ))}
      </Breadcrumbs>
    </Container>
  );
};

export default Breadcrumb;
