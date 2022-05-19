import { BehaviorSubject } from 'rxjs';
import GithubService from '@api/services/github.service';
import { getFileList, getAllFilesContent } from '@utils/helper';

export default class FileExplorerStore {
  private static _subject = new BehaviorSubject<any>({});

  static async init() {
    try {
      const data = await GithubService.getAllFiles();
      const files = getFileList(data);
      const contents = await getAllFilesContent(data);
      console.log(files, contents);
    } catch (error) {
      console.log(error);
    }
  }
}
