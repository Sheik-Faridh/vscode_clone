import { BehaviorSubject } from 'rxjs';
import { PanelState, PanelMode, PanelType } from '@models';

export default class PanelStore {
  private static _initialState: PanelState = { open: false, mode: PanelMode.NONE, type: PanelType.terminal };
  private static _subject = new BehaviorSubject<PanelState>(this._initialState);

  static get subject() {
    return this._subject;
  }

  static close() {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      mode: PanelMode.NONE,
      open: false,
    });
  }

  static open(mode = PanelMode.NONE) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      open: true,
      mode,
    });
  }

  static toggle() {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      open: !currentValue.open,
    });
  }

  static setPanelType(type: PanelType) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      type,
      open: true,
    });
  }

  static get state() {
    return this._subject.value;
  }
}
