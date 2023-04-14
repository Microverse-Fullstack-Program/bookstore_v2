import { Outlet, NavLink } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';

const NavBar = () => {
  const navLinkStyle = ({ isActive }) => {
    const activeLinkStyle = {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? '#7c1f1f' : '#0e0ae6',
    };
    return activeLinkStyle;
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="nav-wrapper">
          <h2>BookStore CMS</h2>
          <nav className="nav-bar">
            <NavLink to="/" style={navLinkStyle}>
              BOOKS
            </NavLink>
            <NavLink to="/categories" style={navLinkStyle}>
              CATEGORIES
            </NavLink>
          </nav>
        </div>
        <BsPersonFill className="personIcon" />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
