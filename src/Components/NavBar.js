import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="top-navbar">
      <span className="link">
        <Link to="/">Tic-Tac-Toe</Link>
      </span>
      <span className="link">
        <Link to="/Contacts">Contacts</Link>
      </span>
    </div>
  );
};

export default Navbar;
