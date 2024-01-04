// Fetch and parse the .env file
fetch('secrets.env')
  .then((response) => response.text())
  .then((envContent) => {
    const envLines = envContent.split('\n');
    for (const line of envLines) {
      const [key, value] = line.split('=');
      if (key && value) {
        window[key.trim()] = value.trim();
      }
    }

    function initializeFirebaseAndFetchData() {
      const firebaseConfig = {
        apiKey: window.API_KEY,
        authDomain: "handlehelt.firebaseapp.com",
        projectId: "handlehelt",
        storageBucket: "handlehelt.appspot.com",
        messagingSenderId: "1005392887603",
        appId: "1:1005392887603:web:7c70a6470b3738aac38846",
        databaseURL: "https://handlehelt-default-rtdb.europe-west1.firebasedatabase.app"
      };
      
      firebase.initializeApp(firebaseConfig);
      const database = firebase.database();
      const dbRef = database.ref('/butikker/kiwi/produkter/kategorier');
      dbRef.once('value')
        .then((snapshot) => {
          const data = snapshot.val();
          console.log('Data from Firebase Realtime Database:', data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
    initializeFirebaseAndFetchData();
});
