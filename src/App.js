import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Game from "./Components/Game";
import Contact from "./Components/Contact";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
