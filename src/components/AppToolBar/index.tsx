import { FC, Fragment, useId, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import toolbarData from '@utils/data/toolbar.data';
import { ToolBarMenuList } from '@models';
import menuStyles from './index.styles';

const StyledMenu = styled(Menu)`
  ${menuStyles}
`;

type ToolBarMenuProps = {
  name: string;
  menu: Array<ToolBarMenuList[]>;
};

const ToolBarMenu: FC<ToolBarMenuProps> = ({ name, menu }) => {
  const buttonId = useId();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
      <StyledMenu
        id={`${buttonId}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
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
      </StyledMenu>
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
