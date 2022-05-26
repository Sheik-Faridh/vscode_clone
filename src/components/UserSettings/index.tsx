import { useId } from 'react';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@atoms/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useMenu } from '@hooks';
import { UserSettingsProps } from '@models';

const UserSettings: React.FC<UserSettingsProps> = ({ name, icon, menu }) => {
  const { buttonId, open, setAnchorEl, anchorEl } = useMenu();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem aria-selected="false">
        <Tooltip title={name} placement="right">
          <ListItemIcon
            aria-controls={open ? `${buttonId}-menu` : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {icon}
          </ListItemIcon>
        </Tooltip>
      </ListItem>
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
                <MenuItem key={i} onClick={handleClose} disabled={l.disabled}>
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

export default UserSettings;
