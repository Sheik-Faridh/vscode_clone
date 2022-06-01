import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Breadcrumb from '@components/Breadcrumb';
import Editor from '@components/Editor';
import EditorGroupsHeader from '@components/EditorGroupsHeader';
import renderEditor from '@hoc/renderEditor.hoc';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const EditorGroups = () => {
  return (
    <Container>
      <EditorGroupsHeader />
      <Breadcrumb />
      <Box className="editor-wrapper">
        <Editor />
      </Box>
    </Container>
  );
};

export default renderEditor(EditorGroups);
