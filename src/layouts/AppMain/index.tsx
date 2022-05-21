import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ActivityBar from '@components/ActivityBar';
import EditorGroups from '@components/EditorGroups';
import Paper, { PaperProps } from '@mui/material/Paper';
import SideBar from '@components/SideBar';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { SideBarStore } from '@store';
import paperStyles from './index.styles';

interface MainProps extends PaperProps {
  component?: React.ElementType;
}

const Main: React.FC<MainProps> = styled(Paper)`
  ${paperStyles}
`;

const AppMain = () => {
  const [showSideBar, setShowSideBar] = useState(SideBarStore.isOpen);

  useEffect(() => {
    const sub = SideBarStore.subject.subscribe((v) => {
      setShowSideBar(v.open);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <Main component="main">
      <ActivityBar />
      <Paper>
        <Splitter
          direction={SplitDirection.Horizontal}
          initialSizes={showSideBar ? [20, 80] : [0, 100]}
          gutterClassName="custom-gutter-horizontal"
          minWidths={[200, 200]}
        >
          <SideBar />
          <EditorGroups />
        </Splitter>
      </Paper>
    </Main>
  );
};

export default AppMain;
