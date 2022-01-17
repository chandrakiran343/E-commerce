import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import {
    doc,
    getDoc,
    updateDoc,
    setDoc,
    arrayUnion,
    arrayRemove,
    collection,
    query,
    getDocs,
  } from "firebase/firestore";
  





const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const db = getFirestore();

    export const getCategories  = async ()=>{
      const docRef = query(collection(db,"items"))
      const docSnap = await getDocs(docRef);
      let categories = [];
      docSnap.docs.forEach((e)=>{
          categories.push({value:e.id,id:e.id})
      })
      return categories;
    }
    export const getBooks = async (category) => {
      const docRef = doc(db,"items",category);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        const books = docSnap.data()['books'];
        return books;
      }
      else{
        console.log('error')
      }
    }

    export const getOrders = async () => {
      const docRef = doc(db,'kartStash','orders');
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        const orders = docSnap.data()['books'];
        return orders;
      }
      else{
        console.log('error')
      }
    }
    

export {app,db,storage};