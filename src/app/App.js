import "./App.css";

import { Route, Routes } from "react-router-dom";
import ShowAll from "../components/ShowAll";
import AddEmp from "../components/AddEmp";
import DeleteEmp from "../components/DeleteEmp";
import UpdateEmp from "../components/UpdateEmp";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showAll" element={<ShowAll />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/delete" element={<DeleteEmp />} />
        <Route path="/update/:id" element={<UpdateEmp />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
