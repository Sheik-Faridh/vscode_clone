import { BehaviorSubject } from 'rxjs';
import GithubService from '@api/services/github.service';
import { FileExplorerState } from '@models';
import { getFileList, getAllFilesContent, EditorIDB } from '@utils/helper';

export default class FileExplorerStore {
  private static _initialState: FileExplorerState = { isFetching: true, contents: {}, files: [], assets: {} };
  private static _subject = new BehaviorSubject<FileExplorerState>(this._initialState);
  private static IDBKey = `${process.env.REPO}_${process.env.REPO_BRANCH}`;

  static get subject() {
    return this._subject;
  }

  static async updateFiles() {
    try {
      const data = await GithubService.getAllFiles();
      const files = getFileList(data);
      const { contents, assets } = await getAllFilesContent(data);
      this._subject.next({ files, contents, isFetching: false, assets });
      await this.persistStore({ files, contents, assets });
      return;
    } catch (error) {
      console.log(error);
    }
  }

  static updateIsFetching(state: boolean) {
    const currentValue = this._subject.value;
    this._subject.next({ ...currentValue, isFetching: state });
  }

  static async persistStore({ files, contents, assets }: Partial<FileExplorerState>) {
    try {
      const timeStamp = Date.now();
      await EditorIDB.put({ files, contents, timeStamp, assets }, this.IDBKey);
      return;
    } catch (error) {
      console.error('Error ocurred while inserting data into IDB');
      throw error;
    }
  }

  static async init() {
    try {
      this.updateIsFetching(true);
      const store = await EditorIDB.get(this.IDBKey);
      const DAYINMILLISECONDS = 86400000;
      if (store) {
        const currentDate = Date.now();
        if (currentDate - Number(store.timeStamp) >= DAYINMILLISECONDS) {
          await this.updateFiles();
        } else {
          this._subject.next({ files: store.files, contents: store.contents, isFetching: false, assets: store.assets });
        }
      } else {
        await this.updateFiles();
      }
    } catch (error) {
      console.error('Error occurred on init method');
      console.log(error);
    } finally {
      this.updateIsFetching(false);
    }
  }

  static get state() {
    return this._subject.value;
  }
}
