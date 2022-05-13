import { Fragment } from 'react';
import Button from '@mui/material/Button';

const AppToolBar = () => {
  const menuList = ['File', 'Edit', 'Section', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <Fragment>
      {menuList.map((list) => (
        <Button key={list} color="inherit" size="small" disableRipple>
          {list}
        </Button>
      ))}
    </Fragment>
  );
};

export default AppToolBar;
