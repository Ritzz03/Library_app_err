import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBb7w03REO6LplkDcmYrE6D5P5ZjsSOF6c",
    authDomain: "library-app-fbb60.firebaseapp.com",
    projectId: "library-app-fbb60",
    storageBucket: "library-app-fbb60.appspot.com",
    messagingSenderId: "278905021353",
    appId: "1:278905021353:web:5d411befd6bb00b2d29ab8"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();