import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Editor from '@components/Editor';
import EditorGroupsHeader from '@components/EditorGroupsHeader';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const EditorGroups = () => {
  return (
    <Container>
      <EditorGroupsHeader />
      <Box className="editor-wrapper">
        <Editor />
      </Box>
    </Container>
  );
};

export default EditorGroups;
