import { Routes, Route } from "react-router";  
import Home from './pages/Home.jsx'
import MainLayout from "./components/layouts/MainLayout.jsx";

function App() {


  return (
    <>
 <Routes>
  <Route element={<MainLayout/>}>
   <Route path="/" element={<Home />} />
   </Route>
 </Routes>
    </>
  )
}

export default App
