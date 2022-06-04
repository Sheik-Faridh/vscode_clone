import { BehaviorSubject } from 'rxjs';
import { Theme, ThemeStoreState } from '@models';

export default class ThemeStore {
  private static _initialState: ThemeStoreState = { mode: (localStorage.getItem('theme') as Theme) || 'dark' };
  private static _subject = new BehaviorSubject<ThemeStoreState>(this._initialState);

  static get subject() {
    return this._subject;
  }

  static setTheme(mode: Theme) {
    const currentValue = this._subject.value;
    localStorage.setItem('theme', mode);
    this._subject.next({
      ...currentValue,
      mode,
    });
  }

  static get state() {
    return this._subject.value;
  }
}
