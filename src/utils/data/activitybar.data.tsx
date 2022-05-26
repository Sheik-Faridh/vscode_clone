import {
  VscFiles,
  VscSearch,
  VscGitMerge,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from 'react-icons/vsc';
import { ActivityWithIcon, SettingWithIcon, ToolBarMenuList } from '@models';

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
];

export const settingList: SettingWithIcon[] = [
  {
    id: 1,
    name: 'Accounts',
    icon: <VscAccount />,
  },
  {
    id: 2,
    name: 'Manage - New Code Update Available',
    icon: <VscSettingsGear />,
  },
];

export const accountsMenu: ToolBarMenuList[][] = [
  [{ name: 'You are not signed in to any accounts', disabled: true }],
  [{ name: 'Turn on Settings Sync...', disabled: false }],
];

export const manageMenu: ToolBarMenuList[][] = [
  [
    {
      name: 'Command Palette',
      shortcut: 'Ctrl+Shift+P',
    },
  ],
  [
    {
      name: 'Settings',
      shortcut: 'Ctrl+Comma',
    },
    {
      name: 'Extensions',
      shortcut: 'Ctrl+Shift+X',
    },
  ],
  [
    {
      name: 'Keyboard Shortcuts [Ctrl+K Ctrl+S]',
    },
    {
      name: 'Migrate from Keyboard Shortcuts from...',
    },
  ],
  [
    {
      name: 'User Snippets',
    },
  ],
  [
    {
      name: 'Color Theme [Ctrl+K Ctrl+T]',
    },
    {
      name: 'File Icon Theme',
    },
    {
      name: 'Product Icon Theme',
    },
  ],
  [{ name: 'Turn on Settings Sync...' }],
  [{ name: 'Manage Workspace Trust' }],
  [{ name: 'Download Updates' }],
];
