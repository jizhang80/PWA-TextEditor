import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 4, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the db")
  const jateDb = await openDB('jate', 4);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: 1, content: content});
  const result = await request;
  console.log("Data saved to the db", result)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all content from db");
  const jateDb = await openDB('jate', 4);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  if (result) {
    console.log('result.content', result.content)
    return result.content;
  } else {
    return null;
  }
};

initdb();
