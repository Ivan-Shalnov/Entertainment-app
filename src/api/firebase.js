import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIn4FvPLh0O0UEQxVmsSWd3heRYmgh0jM',
  authDomain: 'entertainment-app-df808.firebaseapp.com',
  projectId: 'entertainment-app-df808',
  storageBucket: 'entertainment-app-df808.appspot.com',
  messagingSenderId: '759233351616',
  appId: '1:759233351616:web:fcdeae7b81fe1d626fc225',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
