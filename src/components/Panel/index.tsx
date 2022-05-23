import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { VscClose, VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { PanelStore } from '@store';
import { panelTabList } from '@utils/data/panel.data';
import { PanelMode } from '@models';
import containerStyles from './index.styles';

const Container = styled(Paper)`
  ${containerStyles}
`;

const Panel = () => {
  const [value, setValue] = useState('Terminal');
  const [mode, setMode] = useState(PanelStore.state.mode);

  useEffect(() => {
    const store = PanelStore.subject.subscribe((v) => {
      setMode(v.mode);
    });

    return () => store.unsubscribe();
  }, []);

  const handleChange = (active: string) => () => {
    setValue(active);
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
          {panelTabList.map((list) => (
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
