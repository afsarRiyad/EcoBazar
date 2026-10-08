import { Routes, Route } from "react-router";  
import Home from './pages/Home.jsx'
import MainLayout from "./components/layouts/MainLayout.jsx";
import Login from "./pages/Login.jsx";
import Registration from './pages/Registration';
import ForgotPass from "./pages/ForgotPass.jsx";
import Categories from "./pages/Categories.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Cart from "./pages/Cart.jsx";
import ShopPage from "./pages/shop/Index.jsx";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Wishlist from './pages/Wishlist.jsx';
import Checkout from './pages/Checkout.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Faq from './pages/Faq.jsx';

function App() {


  return (
    <>
 <Routes>
  <Route element={<MainLayout/>}>
   <Route path="/" element={<Home />} />
   <Route path="/cart" element={<Cart />} />
   <Route path="/checkout" element={<Checkout />} />
   <Route path="/wishlist" element={<Wishlist />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/faq" element={<Faq />} />
   <Route path="/login" element={<Login />} />
   <Route path="/registration" element={<Registration />} />
   <Route path="/reset_password" element={<ForgotPass />} />
   <Route path="/categories" element={<Categories />} />
   <Route path="/all-products" element={<AllProducts />} />      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
   </Route>
   <Route element={<MainLayout showBreadcrumbs={false} />}>
      <Route path="*" element={<Error />} />
   </Route>
 </Routes>
    </>
  )
}

export default App
