import {initializeApp} from 'firebase/app'
import { getFirestore } from "@firebase/firestore";

export const firebaseConfig = {

    apiKey: "AIzaSyCLqpny0AxrETUnZLx0YkyWOFJs2QI-dQU",
  
    authDomain: "project-management-55a31.firebaseapp.com",
  
    projectId: "project-management-55a31",
  
    storageBucket: "project-management-55a31.appspot.com",
  
    messagingSenderId: "413979858799",
  
    appId: "1:413979858799:web:f7a59af6bc385ba5defa9a"
  
  };
  
  const app =initializeApp(firebaseConfig)
  export const db = getFirestore(app);
