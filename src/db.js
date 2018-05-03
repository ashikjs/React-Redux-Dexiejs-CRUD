import Dexie from 'dexie';

const db = new Dexie('ReactReduxDexieJsCRUD');
db.version(1).stores({ players: 'Messi' });

export default db;