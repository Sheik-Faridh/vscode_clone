import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@atoms/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import toolbarData from '@utils/data/toolbar.data';

const AppToolBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuName, setMenuName] = useState<string>();
  const open = Boolean(anchorEl);
  const menu = toolbarData[menuName as keyof typeof toolbarData] || [];

  const handleClick = (name: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuName(name);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = (name: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (open) {
      setAnchorEl(event.currentTarget);
      setMenuName(name);
    }
  };

  return (
    <Fragment>
      {Object.entries(toolbarData).map(([name, menu]) => (
        <Button
          key={name}
          color="inherit"
          size="small"
          disableRipple
          aria-expanded={open && menuName === name ? 'true' : undefined}
          onMouseEnter={handleMouseEnter(name)}
          onClick={handleClick(name)}
        >
          {name}
        </Button>
      ))}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PopoverClasses={{ root: 'menu-toolbar' }}>
        {menu.map((list, index) => {
          return (
            <span key={index + 1}>
              {list.map((l, i) => (
                <MenuItem key={`${index + 1}${i}`} onClick={handleClose}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>{l.name}</ListItemText>
                  <Typography variant="caption">{l.shortcut ?? ''}</Typography>
                </MenuItem>
              ))}
              {index !== menu.length - 1 && <Divider />}
            </span>
          );
        })}
      </Menu>
    </Fragment>
  );
};

export default AppToolBar;
