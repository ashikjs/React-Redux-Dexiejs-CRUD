import Dexie from 'dexie';

const db = new Dexie('ReactReduxDexieJsCRUD');
db.version(1).stores({ donars: '++id,name,age,bloodGroup,donateBefore,weight' });

export default db;