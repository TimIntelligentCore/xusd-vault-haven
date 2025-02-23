
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="lovable-uploads/a3cf3f16-fd46-40dd-a21e-a170886f131e.png" alt="XUSD Bank" className="h-8" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-xusd-navy hover:text-xusd-gold transition-colors">Home</a>
              <a href="#features" className="text-xusd-navy hover:text-xusd-gold transition-colors">Features</a>
              <a href="#vault" className="text-xusd-navy hover:text-xusd-gold transition-colors">Vault</a>
              <a href="#partners" className="text-xusd-navy hover:text-xusd-gold transition-colors">Partners</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-xusd-navy text-white px-6 py-2 rounded-md hover:bg-xusd-gold transition-colors duration-300">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-xusd-navy hover:text-xusd-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-xusd-navy hover:text-xusd-gold">Home</a>
            <a href="#features" className="block px-3 py-2 text-xusd-navy hover:text-xusd-gold">Features</a>
            <a href="#vault" className="block px-3 py-2 text-xusd-navy hover:text-xusd-gold">Vault</a>
            <a href="#partners" className="block px-3 py-2 text-xusd-navy hover:text-xusd-gold">Partners</a>
            <button className="w-full mt-4 bg-xusd-navy text-white px-6 py-2 rounded-md hover:bg-xusd-gold transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
