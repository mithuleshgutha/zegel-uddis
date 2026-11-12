import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <img src="/img/uddis-logo.png" alt="Uddis" className="h-14 w-auto" />
            <p className="text-cream/80 max-w-xs leading-relaxed">
              We don't just make desserts; we engineer edible clouds. Our milk-based creations melt faster than your resolve to diet.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/uddis.desserts?srtk=YmV5M3IyM2R0djM5" target="_blank" rel="noopener noreferrer" aria-label="Uddis on Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/918886688810" target="_blank" rel="noopener noreferrer" aria-label="Chat with Uddis on WhatsApp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Uddis HQ</h3>
            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 flex-shrink-0" size={20} />
              <div className="text-cream/80">
                <p>Uddis Food Creations</p>
                <p>13-176-7, Kakkalapalli</p>
                <p>Anantapur, Andhra Pradesh 515004</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="flex-shrink-0" size={20} />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="tel:+918886688810" className="text-cream/80 hover:text-cream transition-colors">+91 888 668 8810</a>
                <span className="h-4 w-px bg-cream/30" aria-hidden="true" />
                <a href="tel:+917287977899" className="text-cream/80 hover:text-cream transition-colors">+91 728 797 7899</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="flex-shrink-0" size={20} />
              <a href="mailto:contact@uddis.com" className="text-cream/80 hover:text-cream transition-colors">contact@uddis.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Flavors</h3>
            <ul className="space-y-4">
              <li><a href="#chocolate" className="text-cream/80 hover:text-white hover:underline transition-all">Chocolate</a></li>
              <li><a href="#butterscotch" className="text-cream/80 hover:text-white hover:underline transition-all">Butterscotch</a></li>
              <li><a href="#chocolate-banana" className="text-cream/80 hover:text-white hover:underline transition-all">Banana Chocolate</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col items-center gap-5 text-sm text-cream/50 text-center">
          <p>&copy; {new Date().getFullYear()} Uddis Food Creations. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <img src="/img/fssai-logo.png" alt="FSSAI" className="h-9 w-auto" />
            <span className="h-9 w-px bg-cream/40" aria-hidden="true" />
            <p className="font-medium text-cream/70">Lic. No. 10126013000061</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;