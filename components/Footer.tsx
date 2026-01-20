import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold">Zegel.</h2>
              <span className="text-sm font-sans tracking-widest opacity-60 uppercase">By Uddis</span>
            </div>
            <p className="text-cream/80 max-w-xs leading-relaxed">
              We don't just make desserts; we engineer edible clouds. Our milk-based creations melt faster than your resolve to diet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Uddis HQ</h3>
            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 flex-shrink-0" size={20} />
              <div className="text-cream/80">
                <p>123 Melting Point Ave</p>
                <p>Dessert District, CA 90210</p>
                <p className="mt-2 text-sm text-cream/60">Open Daily: 10am - 9pm</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="flex-shrink-0" size={20} />
              <p className="text-cream/80">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="flex-shrink-0" size={20} />
              <p className="text-cream/80">hello@uddis.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Flavors</h3>
            <ul className="space-y-4">
              <li><a href="#chocolate" className="text-cream/80 hover:text-white hover:underline transition-all">Chocolate</a></li>
              <li><a href="#butterscotch" className="text-cream/80 hover:text-white hover:underline transition-all">Butterscotch</a></li>
              <li><a href="#chocolate-banana" className="text-cream/80 hover:text-white hover:underline transition-all">Choco-Banana</a></li>
              <li><a href="#strawberry" className="text-cream/80 hover:text-white hover:underline transition-all">Strawberry</a></li>
              <li><a href="#coffee" className="text-cream/80 hover:text-white hover:underline transition-all">Coffee</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Uddis Brands. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;