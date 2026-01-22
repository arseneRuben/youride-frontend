import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import TripDetails from './pages/TripDetails';
import AdminDashboard from './pages/AdminDashboard';
import Pricing from './pages/Pricing';


import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import CarsListPage from './pages/CarsListPage';
import BookingPage from './pages/BookingPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/car" element={<CarsListPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/auth" element={<AuthPage />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
