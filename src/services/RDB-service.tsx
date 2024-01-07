import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import initializeApp from 'firebase/compat/app';
import 'firebase/compat/database';
import "firebase/compat/auth";

class RDBservice {
  async fetchRDB() {
    async function initializeFirebaseAndFetchData() {
      const firebaseConfig = {
            apiKey: "AIzaSyB3F4RvO8f1xtyzJAXUwrhqrY2MW8vR3uc",
            authDomain: "handlehelt.firebaseapp.com",
            databaseURL: "https://handlehelt-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "handlehelt",
            storageBucket: "handlehelt.appspot.com",
            messagingSenderId: "1005392887603",
      }
      firebase.initializeApp(firebaseConfig);
      
      firebase.auth().signInAnonymously()
      .then(() => {
        console.log("Signed in anonymously");
      })
      .catch((error) => {
        console.log("Error signing in anonymously");
        console.log("Error code:", error.code);
        console.log("Error message:", error.message);
      })
      const database = firebase.database();
      const dbRef = database.ref('/butikker/kiwi/produkter/kategorier');
      // Fetch data
      dbRef.once('value')
      try {
        const snapshot = await dbRef.once('value');
        const data = snapshot.val();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
    const data = await initializeFirebaseAndFetchData();
    return data;
  }
}

const rdbService = new RDBservice();
export default rdbService;