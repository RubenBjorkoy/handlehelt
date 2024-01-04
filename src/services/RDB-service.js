import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

//!Ugly ass function that NEEDS a rework. 
//!Also needs actual validation
//!And needs to be rewritten in Typescript. None of this js bs

class RDBservice {
  async fetchRDB() {
    // Fetch and parse the .env file
    return fetch('../secrets.env')
      .then((response) => response.text())
      .then(async (envContent) => {
        const envLines = envContent.split('\n');
        for (const line of envLines) {
          const [key, value] = line.split('=');
          if (key && value) {
            // Set environment variables in the browser's global scope (window)
            window[key.trim()] = value.trim();
          }
        }

        // Now, you can access API_KEY like this:
        const API_KEY = window.API_KEY;
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
          
          firebase.initializeApp(firebaseConfig);
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
        return data;
    });
  }
}

const rdbService = new RDBservice();
export default rdbService;