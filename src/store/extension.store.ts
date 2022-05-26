import { BehaviorSubject } from 'rxjs';
import { marketPlaceExtensionsUrl } from '@utils/data/extensions.data';
import { Extension, ExtensionData, ExtensionsRes, ExtensionStoreState } from '@models';

export default class ExtensionStore {
  private static _initialState: ExtensionStoreState = { extensions: [] };
  private static _subject = new BehaviorSubject<ExtensionStoreState>(this._initialState);

  static init() {
    this.fetchExtensions();
  }

  static get subject() {
    return this._subject;
  }

  static async fetchExtensions() {
    try {
      const res = await fetch(marketPlaceExtensionsUrl);
      const data: ExtensionsRes = await res.json();
      const mostpopularExtensions = data.epc.find((d) => d.cn === 'Most Popular');
      const extensions = this.transformExtension(mostpopularExtensions.e);
      this._subject.next({
        extensions,
      });
    } catch (error) {
      console.error('Error occurred while fetching the marketplace extensions');
      console.log(error);
    }
  }

  static transformExtension(data: ExtensionData[]): Extension[] {
    return data.map((d) => ({
      logo: d.i,
      name: d.t,
      publisher: d.a,
      rating: d.r,
      description: d.s,
      downloads: d.ic,
    }));
  }
}
