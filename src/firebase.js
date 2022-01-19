import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAzlwwDIuL9BRS_Qw6cp23RKOAShoOtaps",
    authDomain: "disneyplus-clone-e7013.firebaseapp.com",
    projectId: "disneyplus-clone-e7013",
    storageBucket: "disneyplus-clone-e7013.appspot.com",
    messagingSenderId: "386566878622",
    appId: "1:386566878622:web:3da0ed640730e5e90bd28f"
  };
  
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;