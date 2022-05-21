import { ToolBarData } from '@models';

const toolbarData: ToolBarData = {
  File: [
    [
      {
        name: 'New Text File',
        shortcut: 'Ctrl+N',
      },
      {
        name: 'New File...',
        shortcut: 'Alt+Ctrl+N',
      },
      {
        name: 'New Window',
        shortcut: 'Ctrl+Shift+N',
      },
    ],
    [
      {
        name: 'Open File...',
        shortcut: 'Alt+O',
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
    [
      {
        name: 'Add Folder to Workspace',
      },
      {
        name: 'Save Workspace As...',
      },
      {
        name: 'Duplicate Workspace',
      },
    ],
    [
      {
        name: 'Save',
        shortcut: 'Ctrl+S',
      },
      {
        name: 'Save As',
        shortcut: 'Ctrl+Shift+S',
      },
      {
        name: 'Save All',
      },
    ],
    [
      {
        name: 'Auto Save',
      },
      {
        name: 'Preferences',
      },
    ],
    [
      {
        name: 'Revert File',
      },
      {
        name: 'Close Editor',
        shortcut: 'Ctrl+W',
      },
      {
        name: 'Close Folder [Ctrl+K F]',
      },
      {
        name: 'Close Window',
        shortcut: 'Alt+F4',
      },
    ],
    [{ name: 'Exit', shortcut: 'Ctrl+Q' }],
  ],
  Edit: [
    [
      {
        name: 'Undo',
        shortcut: 'Ctrl+Z',
      },
      {
        name: 'Redo',
        shortcut: 'Ctrl+Y',
      },
    ],
    [
      {
        name: 'Cut',
        shortcut: 'Ctrl+X',
      },
      {
        name: 'Copy',
        shortcut: 'Ctrl+C',
      },
      {
        name: 'Copy As',
      },
      {
        name: 'Paste',
        shortcut: 'Ctrl+V',
      },
    ],
    [
      {
        name: 'Find',
        shortcut: 'Ctrl+F',
      },
      {
        name: 'Replace',
        shortcut: 'Ctrl+H',
      },
    ],
    [
      {
        name: 'Find in Files',
        shortcut: 'Ctrl+Shift+F',
      },
      {
        name: 'Replace in Files',
        shortcut: 'Ctrl+Shift+H',
      },
    ],
    [
      {
        name: 'Toggle Line Comment',
        shortcut: 'Ctrl+/',
      },
      {
        name: 'Toggle Block Comment',
        shortcut: 'Ctrl+Shift+A',
      },
      {
        name: 'Emmet: Expand Abbreviation',
        shortcut: 'Tab',
      },
    ],
  ],
  Selection: [
    [
      {
        name: 'Select All',
        shortcut: 'Ctrl+A',
      },
      {
        name: 'Expand Selection',
        shortcut: 'Alt+Shift+→',
      },
      {
        name: 'Shrink Selection',
        shortcut: 'Alt+Shift+←',
      },
    ],
    [
      {
        name: 'Copy Line Up',
        shortcut: 'Alt+Ctrl+Shift+↑',
      },
      {
        name: 'Copy Line Down',
        shortcut: 'Alt+Ctrl+Shift+↓',
      },
      {
        name: 'Move Line Up',
        shortcut: 'Alt+↑',
      },
      {
        name: 'Move Line Down',
        shortcut: 'Alt+↓',
      },
      {
        name: 'Duplicate Selection',
      },
    ],
    [
      {
        name: 'Add Cursor Abvove',
        shortcut: 'Alt+Shift+Shift+↑',
      },
      {
        name: 'Add Cursor Below',
        shortcut: 'Alt+Shift+Shift+↓',
      },
      {
        name: 'Add Cursor to Line Ends',
        shortcut: 'Alt+Shift+I',
      },
      {
        name: 'Add Next Occurrence',
        shortcut: 'Ctrl+D',
      },
      {
        name: 'Add Previous Occurrence',
      },
      {
        name: 'Select All Occurrences',
        shortcut: 'Ctrl+Shift+L',
      },
    ],
    [
      {
        name: 'Switch to Ctrl+Click for Multi-Cursor',
      },
      {
        name: 'Column Selection Mode',
      },
    ],
  ],
  View: [
    [
      {
        name: 'Command Palette...',
        shortcut: 'Ctrl+P',
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
    [
      {
        name: 'Explorer',
        shortcut: 'Ctrl+Shift+E',
      },
      {
        name: 'Search',
        shortcut: 'Ctrl+Shift+F',
      },
      {
        name: 'Source Control [Ctrl+Shift+G G]',
      },
      {
        name: 'Run',
        shortcut: 'Ctrl+Shift+D',
      },
      {
        name: 'Extensions',
        shortcut: 'Ctrl+Shift+X',
      },
    ],
    [
      {
        name: 'Problem',
        shortcut: 'Ctrl+Shift+M',
      },
      {
        name: 'Output[Ctrl+K Ctrl+H]',
      },
      {
        name: 'Debug Console',
        shortcut: 'Ctrl+Shift+Y',
      },
      {
        name: 'Terminal',
        shortcut: 'Ctrl+`',
      },
    ],
    [
      {
        name: 'Word Wrap',
        shortcut: 'Alt+Z',
      },
      {
        name: 'Show Minimap',
      },
      {
        name: 'Show Breadcrumbs',
      },
      {
        name: 'Render Whitespace',
      },
      {
        name: 'Render Control Characters',
      },
    ],
  ],
  Go: [
    [
      {
        name: 'Back',
        shortcut: 'Alt+Ctrl+-',
      },
      {
        name: 'Forward',
        shortcut: 'Shift+Ctrl+-',
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
    [
      {
        name: 'Go To File...',
        shortcut: 'Ctrl+P',
      },
      {
        name: 'Go To Symbol in Workspace...',
        shortcut: 'Ctrl+T',
      },
    ],
    [
      {
        name: 'Go To Symbol in Editor...',
        shortcut: 'Ctrl+Shift+O',
      },
      {
        name: 'Go To Definition',
        shortcut: 'F12',
      },
      {
        name: 'Go To Declaration',
      },
      {
        name: 'Go To Type Declaration',
      },
      {
        name: 'Go To Implementations',
        shortcut: 'Ctrl+F12',
      },
      {
        name: 'Go To References',
        shortcut: 'Shift+F12',
      },
    ],
    [
      {
        name: 'Go To Line/Column',
        shortcut: 'Ctrl+G',
      },
      {
        name: 'Go To Bracket',
        shortcut: 'Ctrl+Shift+\\',
      },
    ],
    [
      {
        name: 'Next Problem',
        shortcut: 'F8',
      },
      {
        name: 'Previous Problem',
        shortcut: 'Shift+F8',
      },
    ],
    [
      {
        name: 'Next Change',
        shortcut: 'Alt+F3',
      },
      {
        name: 'Previous Change',
        shortcut: 'Alt+Shift+F3',
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
        shortcut: 'Ctrl+F5',
      },
      {
        name: 'Stop Debugging',
        shortcut: 'Shift+F5',
      },
      {
        name: 'Restart Debugging',
        shortcut: 'Ctrl+Shift+F5',
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
    [
      {
        name: 'Step Over',
        shortcut: 'F10',
      },
      {
        name: 'Step Into',
        shortcut: 'F11',
      },
      {
        name: 'Step Out',
        shortcut: 'Shift+F11',
      },
      {
        name: 'Continue',
        shortcut: 'F5',
      },
    ],
    [
      {
        name: 'Toggle Breakpoint',
        shortcut: 'F9',
      },
      {
        name: 'New Breakpoint',
      },
    ],
    [
      {
        name: 'Enable All Breakpoints',
      },
      {
        name: 'Disable All Breakpoints',
      },
      {
        name: 'Remove All Breakpoints',
      },
    ],
    [
      {
        name: 'Install Additional Debuggers...',
      },
    ],
  ],
  Terminal: [
    [
      {
        name: 'New Terminal',
        shortcut: 'Ctrl+Shift+`',
      },
      {
        name: 'Split Terminal',
        shortcut: 'Ctrl+Shift+S',
      },
    ],
    [
      {
        name: 'Run Task',
      },
      {
        name: 'Run Build Task...',
        shortcut: 'Ctrl+Shift+B',
      },
      {
        name: 'Run Active File',
      },
      {
        name: 'Run Selected File',
      },
    ],
    [
      {
        name: 'Show Running Tasks...',
      },
      {
        name: 'Restart Running Task...',
      },
      {
        name: 'Terminate Task...',
      },
    ],
    [
      {
        name: 'Configure Tasks...',
      },
      {
        name: 'Configure Default Build Task...',
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
        shortcut: 'Ctrl+Shit+P',
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
    [
      {
        name: 'Keyboard Shortcuts References [Ctrl+K Ctrl+R]',
      },
      {
        name: 'Video Tutorials',
      },
      {
        name: 'Tips and Tricks',
      },
    ],
    [
      {
        name: 'Join Us on Twitter',
      },
      {
        name: 'Search Feature Requests',
      },
      {
        name: 'Report issue',
      },
    ],
    [
      {
        name: 'View License',
      },
      {
        name: 'Privacy Statement',
      },
    ],
    [
      {
        name: 'Toggle Developer Tool',
        shortcut: 'Ctrl+Shift+I',
      },
      {
        name: 'Open Process Explorer',
      },
    ],
    [
      {
        name: 'Download Availabel Update',
      },
    ],
    [
      {
        name: 'About',
      },
    ],
  ],
};

export default toolbarData;
