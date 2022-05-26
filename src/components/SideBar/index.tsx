import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Explorer from '@components/Explorer';
import Extensions from '@components/Extensions';
import SourceControl from '@components/SourceControl';
import RunAndDebug from '@components/RunAndDebug';
import Search from '@components/Search';
import { SideBarStore } from '@store';
import { Activity, SideBarState } from '@models';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const SideBar = () => {
  const [sideBarState, setSideBarState] = useState<SideBarState>(SideBarStore.state);

  useEffect(() => {
    const store = SideBarStore.subject.subscribe((v) => {
      setSideBarState(v);
    });

    return () => store.unsubscribe();
  }, []);

  const sideBarList: Record<Activity, JSX.Element> = {
    Explorer: <Explorer />,
    Search: <Search />,
    'Source Control': <SourceControl />,
    'Run and Debug': <RunAndDebug />,
    Extensions: <Extensions />,
  };

  return <Container>{sideBarState.open ? sideBarList[sideBarState.activity] || <></> : <></>}</Container>;
};

export default SideBar;
