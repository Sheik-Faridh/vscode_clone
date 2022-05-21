import { ToolBarData } from '@models';

const toolbarData: ToolBarData = {
  File: [
    [
      {
        name: 'New Text File',
        shortcut: 'Ctrl + N',
      },
      {
        name: 'New File...',
        shortcut: 'Alt + Ctrl + N',
      },
      {
        name: 'New Window',
        shortcut: 'Ctrl + Shift + N',
      },
    ],
    [
      {
        name: 'Open File...',
        shortcut: 'Alt + O',
      },
      {
        name: 'Open Folder[Ctrl+K Ctrl+O]',
      },
      {
        name: 'Open Workspace from File...',
      },
      {
        name: 'Open Recent',
      },
    ],
  ],
  Edit: [
    [
      {
        name: 'Undo',
        shortcut: 'Ctrl + Z',
      },
      {
        name: 'Redo',
        shortcut: 'Ctrl + Y',
      },
    ],
    [
      {
        name: 'Cut',
        shortcut: 'Ctrl + X',
      },
      {
        name: 'Copy',
        shortcut: 'Ctrl + C',
      },
      {
        name: 'Paste',
        shortcut: 'Ctrl + V',
      },
    ],
  ],
  Selection: [
    [
      {
        name: 'Select All',
        shortcut: 'Ctrl + A',
      },
      {
        name: 'Expand Selection',
        shortcut: 'Alt + Shift + →',
      },
      {
        name: 'Shrink Selection',
        shortcut: 'Alt + Shift + ←',
      },
    ],
    [
      {
        name: 'Copy Line Up',
        shortcut: 'Alt + Ctrl + Shift + ↑',
      },
      {
        name: 'Copy Line Down',
        shortcut: 'Alt + Ctrl + Shift + ↓',
      },
      {
        name: 'Move Line Up',
        shortcut: 'Alt + ↑',
      },
      {
        name: 'Move Line Down',
        shortcut: 'Alt + ↓',
      },
      {
        name: 'Duplicate Selection',
      },
    ],
  ],
  View: [
    [
      {
        name: 'Command Palette...',
        shortcut: 'Ctrl + P',
      },
      {
        name: 'Open View...',
      },
    ],
    [
      {
        name: 'Appearance',
      },
      {
        name: 'Editor Layout',
      },
    ],
  ],
  Go: [
    [
      {
        name: 'Back',
        shortcut: 'Alt + Ctrl + -',
      },
      {
        name: 'Forward',
        shortcut: 'Shift + Ctrl + -',
      },
      {
        name: 'Last Edit Location [Ctrl+K Ctrl+Q]',
      },
    ],
    [
      {
        name: 'Switch Editor',
      },
      {
        name: 'Switch Group',
      },
    ],
  ],
  Run: [
    [
      {
        name: 'Start Debugging',
        shortcut: 'F5',
      },
      {
        name: 'Run Without Debugging',
        shortcut: 'Ctrl + F5',
      },
      {
        name: 'Stop Debugging',
        shortcut: 'Shift + F5',
      },
      {
        name: 'Restart Debugging',
        shortcut: 'Ctrl + Shift + F5',
      },
    ],
    [
      {
        name: 'Open Configurations',
      },
      {
        name: 'Add Configuration...',
      },
    ],
  ],
  Terminal: [
    [
      {
        name: 'New Terminal',
        shortcut: 'Ctrl + Shift + `',
      },
      {
        name: 'Split Terminal',
        shortcut: 'Ctrl + Shift + S',
      },
    ],
    [
      {
        name: 'Run Task',
      },
      {
        name: 'Run Build Task...',
        shortcut: 'Ctrl + Shift + B',
      },
      {
        name: 'Run Active File',
      },
      {
        name: 'Run Selected File',
      },
    ],
  ],
  Help: [
    [
      {
        name: 'Get Started',
      },
      {
        name: 'Show All Commands',
        shortcut: 'Ctrl + Shit + P',
      },
      {
        name: 'Documentation',
      },
      {
        name: 'Editor Playground',
      },
      {
        name: 'Release Notes',
      },
    ],
  ],
};

export default toolbarData;
