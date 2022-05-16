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
import { ActivityWithIcon, SettingWithIcon } from '@models';

export const activityList: ActivityWithIcon[] = [
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

export const settingList: SettingWithIcon[] = [
  {
    name: 'Accounts',
    icon: <VscAccount />,
  },
  {
    name: 'Manage - New Code Update Available',
    icon: <VscSettingsGear />,
  },
];
