import firebase from 'firebase/app';
import './firebaseInit';
import 'firebase/auth';
// import store from '../redux/store'
// import { addUser } from '../redux/actions';
import db from '../firebase/firestore'

// import { useCollection } from 'react-firebase-hooks/firestore'

// let provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export async function signUp(username, email, password, rpassword, setErrors) {
    try {
        if(!username || !email || !password || !rpassword) throw new Error({ message : 'Fill Up All Fields' });

        if(username.length < 6) throw new Error({ message : 'username must be at least 6 characters' });
        
        if(password !== rpassword) throw new Error({ message : 'Passwords Didnt Match' });
        
        let { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);


        db.collection('users').doc(`${user.uid}`).set({
            uid : user.uid,
            username
        }); 
    } catch(e) {
        setErrors(e.message);
    }
}   

export async function logIn(email, password, setErrors) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // let { uid } = data.user;

        // let user = await db.collection('users').where('uid', '==', uid).get();

        // let userData = user.docs[0].data();
        // let id = user.docs[0].id;
        // console.log('id', id)
        // store.dispatch(addUser({id, ...userData}));

    } catch(e) {

        setErrors(e.message);
    }
}   