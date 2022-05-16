import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import { SideBarStore } from '@store';
import { Activity } from '@models';
import { activityList, settingList } from '@utils/data/activitybar.data';
import activityBarWrapperStyles from './index.styles';

const ActivityBarWrapper = styled(Box)`
  ${activityBarWrapperStyles}
`;

const ActivityBar = () => {
  const handleClick = (activity: Activity) => () => {
    SideBarStore.toggle(activity);
  };

  return (
    <ActivityBarWrapper>
      <Box>
        <List>
          {activityList.map((activity) => (
            <Tooltip title={activity.name} placement="right" key={activity.name}>
              <ListItem aria-selected="false" onClick={handleClick(activity.name)}>
                <ListItemIcon>{activity.icon}</ListItemIcon>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Box>
      <Box>
        <List>
          {settingList.map((setting) => (
            <Tooltip title={setting.name} placement="right" key={setting.name}>
              <ListItem aria-selected="false">
                <ListItemIcon>{setting.icon}</ListItemIcon>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Box>
    </ActivityBarWrapper>
  );
};

export default ActivityBar;
