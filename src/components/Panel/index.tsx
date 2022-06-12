import { useEffect, useState, Suspense, lazy } from 'react';
import { styled } from '@mui/material/styles';
import { VscClose, VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import { PanelStore, ThemeStore } from '@store';
import { panelList } from '@utils/data/panel.data';
import { PanelMode, PanelType } from '@models';
import containerStyles from './index.styles';

const Terminal = lazy(() => import('term/Terminal'));

const Container = styled(Paper)`
  ${containerStyles}
`;

const Panel = () => {
  const [value, setValue] = useState(PanelStore.state.type);
  const [mode, setMode] = useState(PanelStore.state.mode);
  const [theme, setTheme] = useState(ThemeStore.state.mode);

  useEffect(() => {
    const panelStore = PanelStore.subject.subscribe((v) => {
      setMode(v.mode);
      setValue(v.type);
    });

    const themeStore = ThemeStore.subject.subscribe((v) => {
      setTheme(v.mode);
    });

    return () => {
      panelStore.unsubscribe();
      themeStore.unsubscribe();
    };
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
          {panelList.map((list) => (
            <Tab
              key={list.name}
              value={list.name}
              disableRipple
              onClick={handleChange(list.name)}
              label={
                <Tooltip placement="top" title={`${list.name} (${list.shortcut})`}>
                  <span>{list.name}</span>
                </Tooltip>
              }
            />
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
      <Box className="panel-content">
        <Suspense>
          <Terminal theme={theme} prefix="vscodeclone" />
        </Suspense>
      </Box>
    </Container>
  );
};

export default Panel;
