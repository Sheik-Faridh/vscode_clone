import { styled } from '@mui/material/styles';
import ActivityBar from '@components/ActivityBar';
import EditorGroups from '@components/EditorGroups';
import Paper from '@mui/material/Paper';
import SideBar from '@components/SideBar';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import paperStyles from './index.styles';

const Main = styled(Paper)`
  ${paperStyles}
`;

const AppMain = () => {
  return (
    <Main>
      <ActivityBar />
      <Paper component="main">
        <Splitter
          direction={SplitDirection.Horizontal}
          initialSizes={[20, 80]}
          gutterClassName="custom-gutter-horizontal"
        >
          <SideBar />
          <EditorGroups />
        </Splitter>
      </Paper>
    </Main>
  );
};

export default AppMain;
