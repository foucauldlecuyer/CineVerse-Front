import "./Header.css";
import logo from "../../assets/logo.png";

export default function App() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Logo" />
      <form className="header-form">
        <input
          className="header-searchbar"
          type="search"
          placeholder="Rechercher un film ou acteur..."
        />
        <button className="header-searchbar-button" type="submit">
          🔍
        </button>
      </form>
    </header>
  );
}
