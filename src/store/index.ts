import { BehaviorSubject } from 'rxjs';
import { SideBarState, Activity } from '@models';

class _SideBarStore {
  private _subject = new BehaviorSubject<SideBarState>({ open: true, activity: 'Explorer' });

  get isOpen() {
    return this._subject.value.open;
  }

  get subject() {
    return this._subject;
  }

  get activity() {
    return this._subject.value.activity;
  }

  toggle(activity: Nullable<Activity>) {
    const currentValue = this._subject.value;
    const newActivity = currentValue.activity === activity ? null : activity;
    this._subject.next({
      ...currentValue,
      open: newActivity ? true : false,
      activity: newActivity,
    });
  }
}

export const SideBarStore = new _SideBarStore();

export default {
  SideBarStore,
};
