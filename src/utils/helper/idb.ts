import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { FilesStorage } from '@models';

interface EditorDB extends DBSchema {
  _files: {
    key: string;
    value: FilesStorage;
  };
}

export default class EditorIDB {
  private static db: IDBPDatabase<EditorDB>;

  static async open() {
    return await openDB<EditorDB>('editor-db', 1, {
      upgrade(db) {
        db.createObjectStore('_files');
      },
    });
  }

  static async put(data: FilesStorage, key: string) {
    this.db = await this.open();
    await this.db.put('_files', data, key);
    this.db.close();
  }

  static async get(key: string) {
    this.db = await this.open();
    const res = await this.db.get('_files', key);
    this.db.close();
    return res;
  }

  static async delete(key: string) {
    this.db = await this.open();
    await this.db.delete('_files', key);
    this.db.close();
  }
}
