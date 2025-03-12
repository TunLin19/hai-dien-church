import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-holy-blue text-white">
      <div className="container mx-auto p-4 w-full fixed right-0 top-0 justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="hover:text-holy-gold">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-holy-gold">
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="hover:text-holy-gold">
                Lịch sự kiện
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
