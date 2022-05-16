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
