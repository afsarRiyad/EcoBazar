import { Routes, Route } from "react-router";  
import Home from './pages/Home.jsx'
import MainLayout from "./components/layouts/MainLayout.jsx";
import Login from "./pages/Login.jsx";
import Registration from './pages/Registration';

function App() {


  return (
    <>
 <Routes>
  <Route element={<MainLayout/>}>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/registration" element={<Registration />} />
   </Route>
 </Routes>
    </>
  )
}

export default App
