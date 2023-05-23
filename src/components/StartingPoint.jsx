import { NavLink, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import References from './References';

import './StartingPoint.css';
import Logo from '../assets/logo.png';

const StartingPoint = () => {
  <nav>
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <h1>Air Visual&apos;s</h1>
      <ul id="menus">
        <li>
          <NavLink to="/" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutme" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/references" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            References
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/references" element={<References />} />
    </Routes>
  </nav>;
};

export default StartingPoint;
