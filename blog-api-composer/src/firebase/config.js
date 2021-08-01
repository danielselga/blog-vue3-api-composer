import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtjjiqSi9qEKeiCFuYUhmlszP3VY7e2-Y", //Identificador do nosso projeto.
    authDomain: "udemy-vue-firebase-sites-b7b79.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-b7b79",
    storageBucket: "udemy-vue-firebase-sites-b7b79.appspot.com",
    messagingSenderId: "846508718663",
    appId: "1:846508718663:web:a6643550eaf63c41e90f62"
  };


//Init Firebase
firebase.initializeApp(firebaseConfig)

//Init Firestore Service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp}