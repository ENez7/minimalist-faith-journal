
import { Link } from "react-router-dom";
import { Church } from "lucide-react";

const Header = () => {
  return (
    <header className="py-6 border-b border-faith-900/5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Church className="w-5 h-5 text-faith-900" />
          <h1 className="font-serif text-xl text-faith-900">Faith Journal</h1>
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li><Link to="/" className="text-sm text-faith-900/80 hover:text-faith-900 transition-colors">Home</Link></li>
            <li><Link to="/scripture" className="text-sm text-faith-900/80 hover:text-faith-900 transition-colors">Scripture</Link></li>
            <li><Link to="/prayers" className="text-sm text-faith-900/80 hover:text-faith-900 transition-colors">Prayers</Link></li>
            <li><Link to="/new-entry" className="text-sm text-faith-900/80 hover:text-faith-900 transition-colors">New Entry</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
