export type Activity = 'Explorer' | 'Search' | 'Source Control' | 'Run and Debug' | 'Extensions' | 'Gitlens' | 'Docker';

export type ActivitySetting = 'Accounts' | 'Manage - New Code Update Available';

export type SideBarState = {
  open: boolean;
  activity: Nullable<Activity>;
};

export type ActivityWithIcon = {
  name: Activity;
  icon: JSX.Element;
};

export type SettingWithIcon = {
  name: ActivitySetting;
  icon: JSX.Element;
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
