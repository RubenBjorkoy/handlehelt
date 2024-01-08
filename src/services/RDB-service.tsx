import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

class RDBservice {
  async fetchStore(store: string) {
    const database = firebase.database();
    const dbRef = database.ref(`/butikker/${store}/produkter/kategorier`);
    try {
      const snapshot = await dbRef.once('value');
      const data = snapshot.val();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async fetchAllStores() {
    const database = firebase.database();
    const dbRef = database.ref('/butikker');
    try {
      const snapshot = await dbRef.once('value');
      const data = snapshot.val();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

const rdbService = new RDBservice();
export default rdbService;