import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import './Assets/scss/style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer/Footer';
import Listing from './Components/Listing';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import CartIncrement from './Components/CartIncrement';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/product/details" element={<ProductDetail />} />
          <Route path="/cartIncrement" element={<CartIncrement />} />
          <Route path="/cart" element={<Cart />} />


        </Routes>
        <Footer/>

        <br/>
      </BrowserRouter>
    </div>
  );
}

export default App;
