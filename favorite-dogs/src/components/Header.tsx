import { Link, useMatch } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-left space-x-4 p-2 shadow-md sticky top-0 z-50">
      {[
        ["Home", "/"],
        ["Favorites", "/favorites"],
      ].map(([title, url]) => (
        <Link
          to={url}
          key={url}
          className={`rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-300 hover:text-slate-900 ${
            useMatch({ path: url, end: true }) ? "bg-slate-200" : ""
          }`}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
