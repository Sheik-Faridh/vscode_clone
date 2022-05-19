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

  static get activity() {
    return this._subject.value.activity;
  }

  static toggle(activity: Nullable<Activity>) {
    const currentValue = this._subject.value;
    const newActivity = currentValue.activity === activity ? null : activity;
    this._subject.next({
      ...currentValue,
      open: newActivity ? true : false,
      activity: newActivity,
    });
  }
}
