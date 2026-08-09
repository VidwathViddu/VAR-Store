import { Link } from "react-router-dom";
function Navbar({ cartCount }) {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      <h1 className="text-2xl font-bold text-white">
        VAR Store ⚽
      </h1>

      <div className="flex gap-8 text-white">
        <Link to="/">Home</Link>
        <Link to="/jerseys">Jerseys</Link>
        <Link to="/boots">Boots</Link>
        <Link to="/aipicks">AI Picks</Link>
        <Link to="/cart">
          🛒 {cartCount}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;