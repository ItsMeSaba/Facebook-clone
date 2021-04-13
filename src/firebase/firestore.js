import firebase from 'firebase/app';
import './firebaseInit';
import 'firebase/firestore';

// firebase.initializeApp({
//     apiKey: "AIzaSyDVQDnGSmAR0KU1nUFM3PV9rNhMoNt22lQ",
//     authDomain: "facebook-clone-475bb.firebaseapp.com",
//     databaseURL: "https://facebook-clone-475bb.firebaseio.com",
//     projectId: "facebook-clone-475bb",
//     storageBucket: "facebook-clone-475bb.appspot.com",
//     messagingSenderId: "37904000198",
//     appId: "1:37904000198:web:da0b57f35861fc32a763c7",
//     measurementId: "G-Z5DNYEBJVH"
// })



let db = firebase.firestore();

export async function follow(myid, id) {
    db.collection('friends').doc(`${myid}`).update({
        regions: firebase.firestore.FieldValue.arrayUnion(`${id}`)
    });
    
}


export default db;