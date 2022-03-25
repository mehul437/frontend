import logo from './logo.svg';
import './App.css';
import Header from './component/Navbar';
import Footer from './component/footer';
import Home from './component/home';
import { DataProvider } from './component/data';
import Featured from './component/featured';
import StoreTop from './component/store/storeTop';
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom"
import Mobile from './component/mobile/mobile';
import Cart from './component/cart/cart';




function App() {
  return (
   <>
   <DataProvider>
   <Router>
   
   <Header/>
      <Routes>
      
        <Route path='/' element={<Home></Home>}/>
         <Route path='/store/:type' element={<StoreTop/>}/>
         <Route path='/:type' element={<Mobile/>}/>
          <Route path='/cart' element={<Cart/>}/>  
      </Routes>
      <Footer/> 
    
  
    </Router> 
   
  
  </DataProvider>

  </>
  );
}

export default App;
