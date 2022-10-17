import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/details" element={<Details />} exact />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
