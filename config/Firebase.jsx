

import * as firebase from 'firebase'

require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyB3PAVnvKXLXE7zABFNUTGNJ0pms8QD9Dg",
    authDomain: "projectnav-79727.firebaseapp.com",
    projectId: "projectnav-79727",
    storageBucket: "projectnav-79727.appspot.com",
    messagingSenderId: "244853758107",
    appId: "1:244853758107:web:6f0eeea54e9d692e044e3e"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}


const db = firebase.firestore()

export default db;