// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import { collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const config = {
   apiKey: "AIzaSyAiQiOhqfbhg7NO4Tol3nV6ulN05ozW6hQ",
   authDomain: "crwn-db-53830.firebaseapp.com",
   projectId: "crwn-db-53830",
   storageBucket: "crwn-db-53830.appspot.com",
   messagingSenderId: "775899044498",
   appId: "1:775899044498:web:3a7171c92b45fee4bca44b",
   measurementId: "G-20PEPH68RW"
};
const app = initializeApp(config);

export const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const docs = doc(db, "users", userAuth.uid);

   console.log(docs)

   const getDo = await getDoc(docs);

   
   if (!getDo.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      let time = `${createdAt}`
      console.log(createdAt)
      try {
         setDoc(docs, {
            displayName, email, time, ...additionalData
         })
      } catch (error) {
         console.log('error creating user ', error.message);
      }
   }


   return docs;
}

export const auth = getAuth(app);

// console.log(auth)


export const sginInWithGoogle = () => {
   const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
   // .then((re) => {
   //    console.log(re)
   // })
   // .catch((err) => {
   //    console.log(err)
   // })
}