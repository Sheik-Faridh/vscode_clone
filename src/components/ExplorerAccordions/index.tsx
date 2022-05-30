import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FolderView from '@components/FolderView';
import NPMScripts from '@components/NPMScripts';
import OpenEditors from '@components/OpenEditors';
import Outline from '@components/Outline';
import Timeline from '@components/Timeline';
import { ExplorerProvider } from '@context';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const ExplorerAccordions = () => {
  return (
    <ExplorerProvider>
      <Container>
        <OpenEditors />
        <FolderView />
        <Outline />
        <Timeline />
        <NPMScripts />
      </Container>
    </ExplorerProvider>
  );
};

export default ExplorerAccordions;
