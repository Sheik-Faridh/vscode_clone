import { EditorState } from '@models';
import { BehaviorSubject } from 'rxjs';

export default class EditorStore {
  private static _initialState: EditorState = { openFiles: [], active: '' };
  private static _subject = new BehaviorSubject<EditorState>(this._initialState);

  static get subject() {
    return this._subject;
  }

  static openFile(id: string) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      openFiles: [...currentValue.openFiles, id],
      active: id,
    });
  }

  static closeFile(id: string) {
    const currentValue = this._subject.value;
    const newFileList = currentValue.openFiles.filter((file) => file !== id);
    this._subject.next({
      ...currentValue,
      openFiles: newFileList,
      active: newFileList.length ? newFileList.at(-1) : '',
    });
  }
}
