import './App.css';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Routing from './Components/Routing';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/slices/authSlice";
import {db} from './configs/firebaseConfigs'

function App() {
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state app", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <ChakraProvider >      
      <Routing/>
    </ChakraProvider>
  );
}

export default App;
