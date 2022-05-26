import { FC, Fragment, useId } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@atoms/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useMenu } from '@hooks';
import { ToolBarMenuList } from '@models';
import toolbarData from '@utils/data/toolbar.data';

type ToolBarMenuProps = {
  name: string;
  menu: Array<ToolBarMenuList[]>;
};

const ToolBarMenu: FC<ToolBarMenuProps> = ({ name, menu }) => {
  const { buttonId, open, anchorEl, setAnchorEl } = useMenu();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={buttonId}
        color="inherit"
        size="small"
        disableRipple
        aria-controls={open ? `${buttonId}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        id={`${buttonId}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': buttonId,
        }}
      >
        {menu.map((list, index) => {
          const id = useId();
          return (
            <span key={id}>
              {list.map((l, i) => (
                <MenuItem key={`${id}${i}`} onClick={handleClose}>
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
    </>
  );
};

const AppToolBar = () => {
  return (
    <Fragment>
      {Object.entries(toolbarData).map(([name, menu]) => (
        <ToolBarMenu key={name} name={name} menu={menu} />
      ))}
    </Fragment>
  );
};

export default AppToolBar;
