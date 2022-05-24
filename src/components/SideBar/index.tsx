import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Explorer from '@components/Explorer';
import Search from '@components/Search';
import { SideBarStore } from '@store';
import { Activity } from '@models';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const SideBar = () => {
  const [activity, setActivity] = useState<Activity>(SideBarStore.activity);

  useEffect(() => {
    const store = SideBarStore.subject.subscribe((v) => {
      setActivity(v.activity);
    });

    return () => store.unsubscribe();
  }, []);

  return (
    <Container>
      {activity === 'Explorer' && <Explorer />}
      {activity === 'Search' && <Search />}
    </Container>
  );
};

export default SideBar;
