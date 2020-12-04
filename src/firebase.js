import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDkHOPj-7dSP9V0JOZ-v-wz-xMmUB56cKU",
  authDomain: "video-app-2e155.firebaseapp.com",
  databaseURL: "https://video-app-2e155.firebaseio.com",
  projectId: "video-app-2e155",
  storageBucket: "video-app-2e155.appspot.com",
  messagingSenderId: "1071132297899",
  appId: "1:1071132297899:web:edb5490f0a91ca47b945ee"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;