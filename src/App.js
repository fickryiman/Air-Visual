import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Countries from './pages/Countries';
import AboutMe from './pages/AboutMe';
import References from './pages/References';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
