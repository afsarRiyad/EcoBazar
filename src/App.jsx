import { Routes, Route } from "react-router";  
import Home from './pages/Home.jsx'
import MainLayout from "./components/layouts/MainLayout.jsx";
import Login from "./pages/Login.jsx";
import Registration from './pages/Registration';
import ForgotPass from "./pages/ForgotPass.jsx";
import Categories from "./pages/Categories.jsx";

function App() {


  return (
    <>
 <Routes>
  <Route element={<MainLayout/>}>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/registration" element={<Registration />} />
   <Route path="/reset_password" element={<ForgotPass />} />
   <Route path="/categories" element={<Categories />} />
   </Route>
 </Routes>
    </>
  )
}

export default App
