import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;