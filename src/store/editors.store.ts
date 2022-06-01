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
    const newFileList = currentValue.openFiles.includes(id) ? currentValue.openFiles : [...currentValue.openFiles, id];
    this._subject.next({
      ...currentValue,
      openFiles: newFileList,
      active: id,
    });
  }

  static setActive(activeId: string) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      active: activeId,
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

  static closeAllFiles() {
    const currentValue = this._subject.value;
    if (currentValue.openFiles.length || currentValue.active) {
      this._subject.next({
        ...currentValue,
        openFiles: [],
        active: '',
      });
    }
  }
}
