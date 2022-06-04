import { BehaviorSubject } from 'rxjs';
import GithubService from '@api/services/github.service';
import { FileExplorerState } from '@models';
import { getFileList, getAllFilesContent } from '@utils/helper';

export default class FileExplorerStore {
  private static _initialState: FileExplorerState = { isFetching: true, contents: {}, files: [], assets: {} };
  private static _subject = new BehaviorSubject<FileExplorerState>(this._initialState);

  static get subject() {
    return this._subject;
  }

  static async updateFiles() {
    try {
      this.updateIsFetching(true);
      const data = await GithubService.getAllFiles();
      const files = getFileList(data);
      const { contents, assets } = await getAllFilesContent(data);
      this._subject.next({ files, contents, isFetching: false, assets });
      this.persistStore({ files, contents, assets });
    } catch (error) {
      console.log(error);
      this.updateIsFetching(false);
    }
  }

  static updateIsFetching(state: boolean) {
    const currentValue = this._subject.value;
    this._subject.next({ ...currentValue, isFetching: state });
  }

  static persistStore({ files, contents, assets }: Partial<FileExplorerState>) {
    const timeStamp = Date.now();
    const state = JSON.stringify({ files, contents, timeStamp, assets });
    const base64 = window.btoa(state);
    localStorage.setItem('_files', base64);
  }

  static init() {
    const storage = localStorage.getItem('_files');
    const DAYINMILLISECONDS = 86400000;
    if (storage) {
      const store = JSON.parse(window.atob(storage));
      const currentDate = Date.now();
      if (currentDate - Number(store.timeStamp) >= DAYINMILLISECONDS) {
        this.clearPersistStore();
        this.updateFiles();
      } else {
        this._subject.next({ files: store.files, contents: store.contents, isFetching: false, assets: store.assets });
      }
    } else {
      this.updateFiles();
    }
  }

  static get state() {
    return this._subject.value;
  }

  static clearPersistStore() {
    localStorage.removeItem('_files');
  }
}
