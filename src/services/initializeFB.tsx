import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

//Initializes Firebase for the rest of the application and authenticates the user anonymously

class InitializeFB {
  async authenticate() {
    firebase.initializeApp({
        apiKey: "AIzaSyB3F4RvO8f1xtyzJAXUwrhqrY2MW8vR3uc",
        authDomain: "handlehelt.firebaseapp.com",
        databaseURL: "https://handlehelt-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "handlehelt",
        storageBucket: "handlehelt.appspot.com",
        messagingSenderId: "1005392887603",
    });
    
    firebase.auth().signInAnonymously()
    .then(() => {
        console.log("Signed in anonymously");
    })
    .catch((error) => {
        console.log("Error signing in anonymously:", error.code, error.message);
    })
  }
}

const initializeFB = new InitializeFB();
export default initializeFB;