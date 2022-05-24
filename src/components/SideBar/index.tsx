import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Explorer from '@components/Explorer';
import { SideBarStore } from '@store';
import { Activity } from '@models';
import containerStyles from './index.styles';
import { Typography } from '@mui/material';

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
      {activity !== 'Explorer' && (
        <Typography variant="body2" color="common.white">
          Not Implemented Yet
        </Typography>
      )}
    </Container>
  );
};

export default SideBar;
