import { useState } from 'react';
import './menu.css';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className='menu-bg'>
        <ul className={`menu${menuOpen ? '-open' : ''}`}>
          <li><a className="menu-item" href="#about">About</a></li>
          <li><a className="menu-item" href="#projects">Projects</a></li>
          <li><a className="menu-item" href="#contact">Contact</a></li>
        </ul>
        <img
          className={`hamburger-icon${menuOpen ? '-open' : ''}`}
          src="/hamburger.png"
          alt="Hamburger Menu"
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
}