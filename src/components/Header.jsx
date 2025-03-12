import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-cyan-500 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10">
            <img
              src={logo}
              alt="Nhà thờ Hải Điền"
              className="h-full w-full object-contain rounded-full border-2 border-holy-gold"
            />
          </div>
          <h1 className="text-lg md:text-2xl font-semibold">
            <span className="logo">Giáo xứ Hải Điền</span>
          </h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 text-center min-w-[120px] transition-all duration-200 ${
                    isActive
                      ? "text-holy-gold border-b-2 border-holy-gold font-medium"
                      : "hover:text-holy-gold hover:bg-cyan-600 rounded-md"
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-2 text-center min-w-[120px] transition-all duration-200 ${
                    isActive
                      ? "text-holy-gold border-b-2 border-holy-gold font-medium"
                      : "hover:text-holy-gold hover:bg-cyan-600 rounded-md"
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block px-4 py-2 text-center min-w-[120px] transition-all duration-200 ${
                    isActive
                      ? "text-holy-gold border-b-2 border-holy-gold font-medium"
                      : "hover:text-holy-gold hover:bg-cyan-600 rounded-md"
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Lịch sự kiện
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-holy-gold rounded-md p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-holy-gold bg-cyan-600">
          <ul className="flex flex-col">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-3 px-4 transition-colors ${
                    isActive
                      ? "bg-holy-gold text-white font-medium"
                      : "hover:bg-cyan-700"
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-3 px-4 transition-colors ${
                    isActive
                      ? "bg-holy-gold text-white font-medium"
                      : "hover:bg-cyan-700"
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-3 px-4 transition-colors ${
                    isActive
                      ? "bg-holy-gold text-white font-medium"
                      : "hover:bg-cyan-700"
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Lịch sự kiện
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
