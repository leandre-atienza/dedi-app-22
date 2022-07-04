import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export default boot(async ({ app } ) => {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyD2pFvJr5gsBnxSzD4wP44vYMvSYTOBkuw',
    authDomain: 'dedi-app-22.firebaseapp.com',
    projectId: 'dedi-app-22',
    storageBucket: 'dedi-app-22.appspot.com',
    messagingSenderId: '681691972221',
    appId: '1:681691972221:web:b9d8263ce895f29a652714',
    measurementId: 'G-H2YKQ8FH72'
  };

  const firebase = initializeApp(firebaseConfig);
  app.config.globalProperties.$firebase = firebase
  app.config.globalProperties.$analytics = getAnalytics(firebase);
})
