import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/pages/Homepage';
import AboutMe from './components/pages/AboutMe';
import References from './components/pages/References';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
