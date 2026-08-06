// src/components/layout/Navbar/Navbar.tsx
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

// Import logo asset from your assets folder
import brandLogo from '../../../assets/icons/ChatGPT Image May 30, 2026, 01_29_56 PM (1).png';

interface NavItem {
  path: string;
  label: string;
}

const NAV_LINKS: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Product' },
  { path: '/quality', label: 'Why Choose Us' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll to apply solid backdrop when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Resize to close mobile menu on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Handle Body Scroll Lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; 
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          
          {/* Main Desktop/Header Brand Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img
              src={brandLogo}
              alt="Brand Logo"
              className="navbar__logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__desktop-nav" aria-label="Main Navigation">
            <ul className="navbar__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.path} className="navbar__nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__nav-link ${isActive ? 'navbar__nav-link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__desktop-cta">
            <Link to="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="navbar__mobile-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <FiMenu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${isMenuOpen ? 'drawer-overlay--open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside
        className={`drawer ${isMenuOpen ? 'drawer--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer__header">
          {/* Mobile Drawer Brand Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img
              src={brandLogo}
              alt="Brand Logo"
              className="navbar__logo-img"
            />
          </Link>
          <button
            className="drawer__close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FiX size={26} />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile Navigation">
          <ul className="drawer__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="drawer__nav-item">
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `drawer__nav-link ${isActive ? 'drawer__nav-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer__footer">
          <Link to="/quote" className="btn-primary btn-primary--large" onClick={closeMenu}>
            Get a Quote
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;