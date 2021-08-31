import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import data from "./data";
import Home from "./Home";
import Product from "./Product";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>☰</button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="header-links">
            <a href="car.html">Cart </a>
            <a href="signin.html"> Sign in </a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Kites</a>
            </li>
            <li>
              <a href="index.html">Boards</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={Product} />
            <Route path="/" exact={true} component={Home} />
          </div>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
