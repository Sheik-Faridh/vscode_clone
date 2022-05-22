import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { VscClose, VscChevronUp } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { PanelStore } from '@store';
import { panelTabList } from '@utils/data/panel.data';
import { PanelMode } from '@models';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const Panel = () => {
  const [value, setValue] = useState('Terminal');

  const handleChange = (active: string) => () => {
    setValue(active);
  };

  const handleClose = () => {
    PanelStore.close();
  };

  const handleOpenFull = () => {
    PanelStore.open(PanelMode.FULL);
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
          <IconButton disableRipple onClick={handleOpenFull}>
            <VscChevronUp />
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
