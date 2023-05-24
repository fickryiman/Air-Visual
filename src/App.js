import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import AboutMe from './components/pages/AboutMe';
import References from './components/pages/References';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
