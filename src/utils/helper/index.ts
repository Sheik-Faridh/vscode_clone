import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { Tree, FileData } from '@models';
import GithubService from '@api/services/github.service';

export const getFileList = (tree: Tree[]) => {
  const fileList = [];
  const regex = /\//;
  for (const file of tree) {
    let parent: null | string = null;
    let name = file.path;
    if (regex.test(file.path)) {
      const relativePathList = file.path.split('/');
      name = relativePathList.splice(-1)[0];
      const parentRelativePath = relativePathList.join('/');
      const parentFolder = tree.find((f) => f.path === parentRelativePath);
      parent = parentFolder?.sha ?? null;
    }
    const data: Partial<FileData> = { sha: file.sha, path: file.path, parent, name, type: file.type };
    if (file.size) data.size = file.size;
    fileList.push(data);
  }
  return fileList;
};

export const getAllFilesContent = async (tree: Tree[]) => {
  try {
    const files = tree.filter((file) => file.type === 'blob');
    const promises = [];
    for (const file of files) {
      promises.push(GithubService.getFileContent(file.path));
    }
    const results = promises.length ? await Promise.all(promises) : await Promise.resolve([]);
    return results.reduce((acc, response) => {
      acc[response.sha] = window.atob(response.content);
      return acc;
    }, {});
  } catch (error) {
    console.log(error);
  }
};

export const sortTreeView = (fileList: Partial<FileData>[]) => {
  const folders = fileList.filter((f) => f.type === 'tree');
  const files = fileList.filter((f) => f.type === 'blob');
  return [...folders, ...files];
};

export const getLanguageId = (languages: monaco.languages.ILanguageExtensionPoint[], extension: string) => {
  const match = languages.find((l) => l.extensions?.includes(extension));
  return match?.id ? match.id : extension === '.prettierrc' ? 'json' : 'plaintext';
};

export const fullScreenService = {
  get doc() {
    return <FullScreenDocument>document;
  },
  enter() {
    const el = this.doc.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  },
  leave() {
    if (this.doc.exitFullscreen) this.doc.exitFullscreen();
    else if (this.doc.msExitFullscreen) this.doc.msExitFullscreen();
    else if (this.doc.mozCancelFullScreen) this.doc.mozCancelFullScreen();
    else if (this.doc.webkitExitFullscreen) this.doc.webkitExitFullscreen();
  },
  toggle() {
    if (this.enabled) this.leave();
    else this.enter();
  },
  get enabled() {
    return !!(
      this.doc.fullscreenElement ||
      this.doc.mozFullScreenElement ||
      this.doc.webkitFullscreenElement ||
      this.doc.msFullscreenElement
    );
  },
};
