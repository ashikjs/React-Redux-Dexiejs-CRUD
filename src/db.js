import Dexie from 'dexie';

const db = new Dexie('ReactReduxDexieJsCRUD');
db.version(1).stores({ donars: '++id,name' });

export default db;