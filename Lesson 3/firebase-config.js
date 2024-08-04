import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBfGJ_TSKPkw2JQ8t0wppqgI5kFj4y7gpM',
  authDomain: 'fir-cloud-firestore-jsi02.firebaseapp.com',
  projectId: 'fir-cloud-firestore-jsi02',
  storageBucket: 'fir-cloud-firestore-jsi02.appspot.com',
  messagingSenderId: '12198415812',
  appId: '1:12198415812:web:1541283d136757b046a891',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const data = {
//   name: 'Los Angeles',
//   state: 'CA',
//   country: 'USA',
// };

// const mergeData = {
//   code: 10000,
//   position: '241200, 165550',
// };
// const laRef = doc(db, 'cities', 'LA');
// await setDoc(laRef, data);
// await setDoc(laRef, { country: 'VN', updateAt: serverTimestamp() }, { merge: true });
// await setDoc(laRef, mergeData, { merge: true });

// const docRef = await addDoc(collection(db, 'cities'), {
//   name: 'Tokyo',
//   country: 'Japan',
// });

// console.log(docRef.id);
