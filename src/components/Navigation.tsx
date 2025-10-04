import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import exampleImage from 'figma:asset/366f656a5bc7aaa80ff88003cfc982fc6c85d2a8.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'order', label: 'Order' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer animate-float"
            onClick={() => onPageChange('home')}
          >
            <img 
              src={exampleImage} 
              alt="Mpraise Yogurt" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`transition-all duration-300 px-3 py-2 rounded-full ${
                  currentPage === item.id
                    ? 'bg-[var(--brand-blue)] text-white'
                    : 'text-gray-700 hover:text-[var(--brand-blue)] hover:bg-[var(--brand-blue-lightest)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => onPageChange('order')}
              className="gradient-primary rounded-full px-6 py-2 hover:shadow-lg transition-shadow"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[var(--brand-blue)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                    currentPage === item.id
                      ? 'bg-[var(--brand-blue)] text-white'
                      : 'text-gray-700 hover:bg-[var(--brand-blue-lightest)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onPageChange('order');
                  setIsMenuOpen(false);
                }}
                className="w-full gradient-primary rounded-xl mt-4"
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}