import { StatusBarState } from '@models';
import { BehaviorSubject } from 'rxjs';

export default class StatusBarStore {
  private static _initialState: StatusBarState = { lineNumber: 0, column: 0, fileType: '' };
  private static _subject = new BehaviorSubject<StatusBarState>(this._initialState);

  static get subject() {
    return this._subject;
  }

  static setCursorPosition(lineNumber: number, column: number) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      lineNumber,
      column,
    });
  }

  static setFileType(fileType: string) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      fileType,
    });
  }

  static reset() {
    this._subject.next({ ...this._initialState });
  }
}
