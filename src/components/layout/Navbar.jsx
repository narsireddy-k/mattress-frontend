import { Link } from "react-router-dom";

export default function Navbar({ onStart }) {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-gray-900 hover:opacity-80 transition">
          Sleep<span className="text-blue-600">Smart</span>
        </Link>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/products" className="text-gray-600 hover:text-gray-900 transition">
            Products
          </Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition">Dashboard</Link>
          {onStart && (
            <button onClick={onStart} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Recommendation
            </button>
          )}
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-gray-700 text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}
