import { PanelType } from '@models';

export const panelList: { name: PanelType; shortcut: string }[] = [
  {
    name: PanelType.problem,
    shortcut: 'Ctrl+Shift+M',
  },
  {
    name: PanelType.output,
    shortcut: 'Ctrl+K Ctrl+H',
  },
  {
    name: PanelType.terminal,
    shortcut: 'Ctrl+`',
  },
  {
    name: PanelType.debug,
    shortcut: 'Ctrl+Shift+Y',
  },
];
