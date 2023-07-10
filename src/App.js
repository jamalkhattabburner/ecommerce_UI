import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import DisplayProduct from './Components/DisplayProduct/DisplayProduct';
import Checkout from './Components/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';
import CartContextProvider from './Components/CartContext/CartContext';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <CartContextProvider >
            <NavBar />
            <Routes>            
              <Route path="/display" element={<DisplayContent/>}></Route>
              <Route path="/product/:id" element={<DisplayProduct/>}></Route>
              <Route path="/checkout" element={<Checkout/>}></Route>
              <Route path="/" element={<MainPage />} />
              <Route path="/home" element={<MainPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartContextProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
