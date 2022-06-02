import { BehaviorSubject } from 'rxjs';
import { DialogStoreState, DialogType } from '@models';

export default class DialogStore {
  private static _initialState: DialogStoreState = { open: false, type: null };
  private static _subject = new BehaviorSubject<DialogStoreState>(this._initialState);

  static get subject() {
    return this._subject;
  }

  static open(type: DialogType) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      open: true,
      type,
    });
  }

  static get state() {
    return this._subject.value;
  }

  static close() {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      open: false,
      type: null,
    });
  }
}
