import { useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Explorer from '@components/Explorer';
import { SideBarStore } from '@store';
import { Activity } from '@/models';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const SideBar = () => {
  const ref = useRef<Element>();
  const [activity, setActivity] = useState<Activity>(SideBarStore.activity);

  useEffect(() => {
    const sub = SideBarStore.subject.subscribe((v) => {
      setActivity(v.activity);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <Container ref={ref}>
      <Drawer variant="temporary" anchor="left" open={true} container={ref.current} transitionDuration={0}>
        {activity === 'Explorer' && <Explorer />}
      </Drawer>
    </Container>
  );
};

export default SideBar;
