import CreateBlog from './Admin/Pages/CreateBlog/CreateBlog';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import CollapsibleExample from './Components/Navbar/Navbar';
// import Home from './Admin/Pages/Home';
import AdminHome from './Admin/Pages/Home/AdminHome';
import CheckoutPage from './Page/CheckoutPdf';
import { AddWalletpage } from './Admin/Pages/AddWalletpage/Addwallet';
import Footer from './Components/Footer/Footer';
import Image from './Page/Image/Image';




function App() {
  return (
    <>
      <div className='body'>
        <div >
         <CollapsibleExample/>
         <AllRoutes/>
         <Footer/>
        </div>
      
       
      </div>
      
    </>
  );
}

export default App;
