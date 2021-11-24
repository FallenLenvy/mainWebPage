import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCznjU3SjTvLP4swwaYu7zR_z--Fz1zGEU',
  authDomain: 'lonatown.firebaseapp.com',
  databaseURL: 'https://lonatown.firebaseio.com',
  projectId: 'lonatown',
  storageBucket: 'lonatown.appspot.com',
  messagingSenderId: '618464199027',
  appId: '1:618464199027:web:20b34d41b56a16f14fc506',
  measurementId: 'G-X6NKTE83NG'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export default getDatabase(firebaseApp)
