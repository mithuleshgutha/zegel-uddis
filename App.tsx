import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorSection from './components/FlavorSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { FLAVORS } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 selection:bg-chocolate selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Render Flavor Sections Dynamically */}
        <div className="relative">
          {FLAVORS.map((flavor, index) => (
            <div key={flavor.id} className="relative z-10">
               {/* Optional divider wave logic could go here if SVG libraries were used, keeping it clean for now */}
               <FlavorSection flavor={flavor} />
            </div>
          ))}
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;