
// Initialize Firebase and fetch data after the SDK is fully loaded
function initializeFirebaseAndFetchData() {
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
    .then((snapshot) => {
      const data = snapshot.val();
      console.log('Data from Firebase Realtime Database:', data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

window.addEventListener('load', initializeFirebaseAndFetchData);