import { useCallback, useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Dialog from '@atoms/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@atoms/TextField';
import { useSearch } from '@hooks';
import { DialogStore, ThemeStore } from '@store';
import { Theme } from '@models';
import { themes } from '@utils/data/themes.data';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const ThemeDialog = () => {
  const [active, setActive] = useState<Theme>(ThemeStore.state.mode);
  const { search, handleChange } = useSearch();

  const handleClose = () => {
    DialogStore.close();
  };

  const handleClick = (mode: Theme) => () => {
    ThemeStore.setTheme(mode);
    handleClose();
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        const index = themes.findIndex((t) => t.value === active);
        if (index !== -1) {
          if (index === themes.length - 1) ThemeStore.setTheme(themes[0].value);
          else ThemeStore.setTheme(themes[index + 1].value);
        }
      } else if (event.key === 'ArrowUp') {
        const index = themes.findIndex((t) => t.value === active);
        if (index !== -1) {
          if (index === 0) ThemeStore.setTheme(themes[themes.length - 1].value);
          else ThemeStore.setTheme(themes[index - 1].value);
        }
      }
    },
    [active],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const store = ThemeStore.subject.subscribe((v) => {
      setActive(v.mode);
    });

    return () => store.unsubscribe();
  }, []);

  const fileteredTheme = useMemo(
    () => themes.filter((t) => t.value.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <Dialog open maxWidth="md" hideBackdrop onClose={handleClose} className="topDialogContainer">
      <Container>
        <TextField
          fullWidth
          placeholder="Select Color Theme (Up/Down Keys to see Preview)"
          onChange={handleChange}
          autoFocus
        />
        <List>
          {fileteredTheme.map((t, i) => (
            <ListItem
              tabIndex={i}
              value={t.value}
              key={t.value}
              selected={active === t.value}
              onClick={handleClick(t.value)}
            >
              <ListItemText>{t.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </Dialog>
  );
};

export default ThemeDialog;
