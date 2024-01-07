import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import initializeApp from 'firebase/compat/app';
import 'firebase/compat/database';
import FetchSecrets from './fetchSecrets.tsx';

// firebase.signInAnonymously().catch((error) => {
//   // Handle Errors here.
//   console.error('Error signing in anonymously:', error);
// });

//!Ugly ass function that NEEDS a rework. 
//!Also needs actual validation
//!And needs to be rewritten in Typescript. None of this js bs

class RDBservice {
  async fetchRDB() {
    let API_KEY = "";
      FetchSecrets.fetchSecret('API_KEY')
        .then(apiKey => {
          console.log(apiKey);
          API_KEY = apiKey;
        });
    // Initialize Firebase and fetch data after the SDK is fully loaded
        async function initializeFirebaseAndFetchData() {
          const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "handlehelt.firebaseapp.com",
            projectId: "handlehelt",
            storageBucket: "handlehelt.appspot.com",
            messagingSenderId: "1005392887603",
            appId: "1:1005392887603:web:7c70a6470b3738aac38846",
            databaseURL: "https://handlehelt-default-rtdb.europe-west1.firebasedatabase.app"
          };
          
          const app = initializeApp(firebaseConfig);
          // Reference to the database
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
        console.log(data);
        return data;
  }
}

const rdbService = new RDBservice();
export default rdbService;