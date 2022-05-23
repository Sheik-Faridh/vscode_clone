import { styled } from '@mui/material/styles';
import ActivityBar from '@components/ActivityBar';
import EditorGroups from '@components/EditorGroups';
import Paper, { PaperProps } from '@mui/material/Paper';
import Panel from '@components/Panel';
import SideBar from '@components/SideBar';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { useMain } from '@hooks';
import containerStyles from './index.styles';

interface ContainerProps extends PaperProps {
  component?: React.ElementType;
}

const Container: React.FC<ContainerProps> = styled(Paper)`
  ${containerStyles}
`;

const AppMain = () => {
  const { horizontalSplitter, verticalSplitter, handleVerticalSplitterResizeFinish, isTransparent } = useMain();
  return (
    <Container component="main">
      <ActivityBar />
      <Paper>
        <Splitter
          direction={SplitDirection.Horizontal}
          initialSizes={horizontalSplitter.initialSizes}
          gutterClassName="custom-gutter-horizontal"
          minWidths={horizontalSplitter.minWidths}
        >
          <SideBar />
          <Splitter
            direction={SplitDirection.Vertical}
            initialSizes={verticalSplitter.initialSizes}
            gutterClassName={isTransparent ? 'custom-gutter-vertical transparent' : 'custom-gutter-vertical'}
            minHeights={verticalSplitter.minHeights}
            onResizeFinished={handleVerticalSplitterResizeFinish}
          >
            <EditorGroups />
            <Panel />
          </Splitter>
        </Splitter>
      </Paper>
    </Container>
  );
};

export default AppMain;
