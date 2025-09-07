import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="navbar-home">
        <Link to="/">Home Page (Netlify test)</Link>
      </div>
      <div className="navbar-links">
        <Link to="/links">Links Page! (Netlify test)</Link>
      </div>
      <div className="navbar-about">
        <Link to="/about">The About Section! LOL!(Netlify test)</Link>
      </div>
      <div className="navbar-contact">
        <Link to="/contact">The Contact Section! (Netlify test)</Link>
      </div>
      <div>
        <br></br>
        <a href="https://diablo2.io/">
          and a link to external website example! (Netlify test)
        </a>
      </div>
    </nav>
  );
}
