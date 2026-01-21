import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import TripDetails from './pages/TripDetails';
import AdminDashboard from './pages/AdminDashboard';

import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
