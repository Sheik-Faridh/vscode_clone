import { styled } from '@mui/material/styles';
import {
  VscFiles,
  VscSearch,
  VscGitMerge,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from 'react-icons/vsc';
import { FaDocker } from 'react-icons/fa';
import { ImGit } from 'react-icons/im';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import activityBarWrapperStyles from './index.styles';

const activityList = [
  {
    name: 'Explorer',
    icon: <VscFiles />,
  },
  {
    name: 'Search',
    icon: <VscSearch />,
  },
  {
    name: 'Source Control',
    icon: <VscGitMerge />,
  },
  {
    name: 'Run and Debug',
    icon: <VscDebugAlt />,
  },
  {
    name: 'Extensions',
    icon: <VscExtensions />,
  },
  {
    name: 'Gitlens',
    icon: <ImGit />,
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
  },
];

const settingList = [
  {
    name: 'Accounts',
    icon: <VscAccount />,
  },
  {
    name: 'Manage - New Code Update Available',
    icon: <VscSettingsGear />,
  },
];

const ActivityBarWrapper = styled(Box)`
  ${activityBarWrapperStyles}
`;

const ActivityBar = () => {
  return (
    <ActivityBarWrapper>
      <Box>
        <List>
          {activityList.map((activity) => (
            <Tooltip title={activity.name} placement="right" key={activity.name}>
              <ListItem aria-selected="false">
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
