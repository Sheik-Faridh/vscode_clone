export type Activity = 'Explorer' | 'Search' | 'Source Control' | 'Run and Debug' | 'Extensions';

export type ActivitySetting = 'Accounts' | 'Manage - New Code Update Available';

export enum ExplorerActivity {
  open_editors = 'Open Editors',
  folder_view = 'Folder View',
  timeline = 'Timeline',
  outline = 'Outline',
  npm_scripts = 'NPM Scripts',
}

export enum PanelType {
  problem = 'Problems',
  output = 'Output',
  terminal = 'Terminal',
  debug = 'Debug Console',
}

export type SideBarState = {
  open: boolean;
  activity: Nullable<Activity>;
};

export type ActivityWithIcon = {
  name: Activity;
  icon: JSX.Element;
  shortcut: string;
};

export type SettingWithIcon = {
  name: ActivitySetting;
  icon: JSX.Element;
  id: number;
};

export type FileType = 'blob' | 'tree';

export type Tree = {
  path: string;
  mode: string;
  sha: string;
  size: number;
  url: string;
  type: FileType;
};

export interface FileData extends Omit<Tree, 'mode' | 'url'> {
  name: string;
  parent: null | string;
}

export type FileExplorerState = {
  isFetching: boolean;
  contents: Record<string, string>;
  files: Partial<FileData>[];
};

export type EditorState = {
  openFiles: string[];
  active: string;
};

export type ToolBarMenuList = {
  name: string;
  shortcut?: string;
  disabled?: boolean;
};

export type ToolBarData = {
  [key: string]: Array<ToolBarMenuList[]>;
};

export enum PanelMode {
  FULL = 'full',
  NONE = 'none',
}

export type PanelState = {
  open: boolean;
  mode: PanelMode;
  type: PanelType;
};

export type StatusBarState = {
  lineNumber: number;
  column: number;
  fileType: string;
  action: string;
};

export type ExtensionData = {
  ic: number;
  dc: number;
  rc: number;
  a: string;
  cc: number;
  l: string;
  s: string;
  i: string;
  fi: string;
  t: string;
  r: number;
  pc: boolean;
  pd: string;
  pdv: boolean;
};

type ExtensionCategory = {
  cn: string;
  e: ExtensionData[];
  hme: boolean;
  sml?: any;
};

export interface ExtensionsRes {
  epc: ExtensionCategory[];
  c: string[];
}

export type Extension = {
  logo: string;
  name: string;
  publisher: string;
  rating: number;
  description: string;
  downloads: number;
  verified: boolean;
};

export type ExtensionStoreState = {
  extensions: Extension[];
};

export interface UserSettingsProps extends SettingWithIcon {
  menu: ToolBarMenuList[][];
}
