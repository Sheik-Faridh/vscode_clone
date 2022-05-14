import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FolderView from '@components/FolderView';
import NPMScripts from '@components/NPMScripts';
import OpenEditors from '@components/OpenEditors';
import Outline from '@components/Outline';
import Timeline from '@components/Timeline';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const SideBarAccordions = () => {
  return (
    <Container>
      <OpenEditors />
      <FolderView />
      <Outline />
      <Timeline />
      <NPMScripts />
    </Container>
  );
};

export default SideBarAccordions;
