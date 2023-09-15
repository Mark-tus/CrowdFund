import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import BusinessForm from "./components/BusinessForm";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<><Navbar/><Home /></>} />
          <Route path="/AddBusiness" element={<BusinessForm/>} />
       </Routes>
    </>
  );
}

export default App;
