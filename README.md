<p align="center">  <img width="300" height="300" src="https://user-images.githubusercontent.com/806104/98771085-46d8f180-23a9-11eb-9caf-9d4c0f605749.png"> </p>

# Visual Studio Code Clone

[![Website](https://img.shields.io/badge/Website-Netlify-blue)](https://vscodeclone.netlify.app/)

A Visual Studio Code Clone app shows its own code :sunglasses: with the help of GitHub API. The application is bundled with the help of powerful plugin, **Webpack**. A CI/CD pipeline is setup with the GitHub Workflow for deploying the application on Netlify platform while pushing the code into main branch. All files are stored in the indexedDB due to the GitHub API rate limit constraints and update the records in the database based on certain interval.

<p align="center">  <img width="50" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207">&nbsp;&nbsp;&nbsp;<img width="40" height="50" src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png">&nbsp;&nbsp;&nbsp;<img width="50" height="50" src="https://mui.com/static/icons/180x180.png">&nbsp;&nbsp;&nbsp;<img width="50" height="50" src="https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png"></p>

<p align="center"><img src="https://miro.medium.com/max/1200/1*z6fvCk9Vk8t7oKkpQ82mKw.png" width="48%"></p>
<p align="center"><img src="https://miro.medium.com/max/888/1*ZxlxSFAWOlhSOFOo9IjT6g.png" width="50%"> </p>

1. VSCode Clone - **Host** app
2. Terminal - **Remote** app _(built using [xterm.js](https://www.npmjs.com/package/xterm))_

> **Note:** The application is not designed for responsiveness

# Libraries Used

1. [React 18](https://reactjs.org/docs/getting-started.html)
2. [Material UI 5](https://mui.com/material-ui/getting-started/installation/)
3. [Monaco Editor](https://microsoft.github.io/monaco-editor/)
4. [RxJs](https://rxjs.dev/guide/overview)
5. [Splitter](https://www.npmjs.com/package/@devbookhq/splitter)
6. [React Icons](https://www.npmjs.com/package/react-icons)
7. [Octokit](https://www.npmjs.com/package/octokit)
8. [idb](https://www.npmjs.com/package/idb)

# Feature

1. Supports dark and light theme
2. Added config setup for react in monaco editor
3. Support for opening multiple files
4. Added support for rendering some details in Statusbar like file type and cursor position.
5. Added horizontal splitter between Sidebar and Editor
6. Added vertical splitter between Panel and Editor
7. Display vscode marketplace most popular extensions
8. Display folder and files in the form of tree view in Sidebar
9. Display all currently opened files in Open Editor section
10. Added shortcut options for rich user experience
11. Added support for **Go to File** option
12. Shows toolbar menu options
13. Added support for breadcrumb path navigation
14. Support for viewing the images and markdown files

# Shortcuts

A list of shortcut options supported by the application mentioned below

| Controls          | Command                                     |
| ----------------- | ------------------------------------------- |
| `Ctrl+P`          | _Open **Go to File** Dialog_                |
| `` Ctrl+(`) ``    | _Open **Terminal** Panel_                   |
| `Ctrl+Shift+G G ` | _Toggle **Source Control** Sidebar Section_ |
| `Ctrl+K Ctrl+H `  | _Open **Output** Panel_                     |
| `Ctrl+K T `       | _Open **Color Preference** Dialog_          |
| `Ctrl+Shift+E`    | _Toggle **Explorer** Sidebar Section_       |
| `Ctrl+Shift+F`    | _Toggle **Search** Sidebar Section_         |
| `Ctrl+Shift+D`    | _Toggle **Run and Debug** Sidebar Section_  |
| `Ctrl+Shift+X`    | _Toggle **Extension** Sidebar Section_      |
| `Ctrl+Shift+Y`    | _Open **Debug** Panel_                      |
| `Ctrl+Shift+M`    | _Open **Problem** Panel_                    |
