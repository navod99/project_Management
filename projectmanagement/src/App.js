import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Routing from './Components/Routing';

function App() {
  return (
    <ChakraProvider >      
      <Routing/>
    </ChakraProvider>
  );
}

export default App;
