import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { VscClose, VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { PanelStore } from '@store';
import { PanelMode, PanelType } from '@models';
import containerStyles from './index.styles';

const Container = styled(Paper)`
  ${containerStyles}
`;

const Panel = () => {
  const [value, setValue] = useState(PanelStore.state.type);
  const [mode, setMode] = useState(PanelStore.state.mode);

  useEffect(() => {
    const store = PanelStore.subject.subscribe((v) => {
      setMode(v.mode);
      setValue(v.type);
    });

    return () => store.unsubscribe();
  }, []);

  const handleChange = (active: PanelType) => () => {
    PanelStore.setPanelType(active);
  };

  const handleClose = () => {
    PanelStore.close();
  };

  const handleOpen = (modeType: PanelMode) => () => {
    PanelStore.open(modeType);
  };

  return (
    <Container>
      <Box className="panel-header">
        <Tabs value={value}>
          {Object.values(PanelType).map((list) => (
            <Tab key={list} value={list} label={list} disableRipple onClick={handleChange(list)} />
          ))}
        </Tabs>
        <Box>
          <IconButton disableRipple onClick={handleOpen(mode === PanelMode.FULL ? PanelMode.NONE : PanelMode.FULL)}>
            {mode === PanelMode.FULL ? <VscChevronDown /> : <VscChevronUp />}
          </IconButton>
          <IconButton disableRipple onClick={handleClose}>
            <VscClose />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Panel;
