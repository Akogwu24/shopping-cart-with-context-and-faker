import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headbar from './components/headbar/Headbar';
import CartPage from './pages/cart-page';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
