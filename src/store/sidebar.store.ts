import { BehaviorSubject } from 'rxjs';
import { SideBarState, Activity } from '@models';

export default class SideBarStore {
  private static _subject = new BehaviorSubject<SideBarState>({ open: true, activity: 'Explorer' });

  static get isOpen() {
    return this._subject.value.open;
  }

  static get subject() {
    return this._subject;
  }

  static get state() {
    return this._subject.value;
  }

  static toggle(activity: Nullable<Activity>) {
    const currentValue = this._subject.value;
    this._subject.next({
      ...currentValue,
      open: activity === currentValue.activity ? !currentValue.open : true,
      activity,
    });
  }
}
