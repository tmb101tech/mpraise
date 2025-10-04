import { Heart, Facebook, Instagram, Twitter, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import exampleImage from 'figma:asset/366f656a5bc7aaa80ff88003cfc982fc6c85d2a8.png';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'order', label: 'Order' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const productLinks = [
    'Small Pack Sweetened',
    'Small Pack Unsweetened',
    'Large Pack Sweetened',
    'Large Pack Unsweetened',
    'Premium Line'
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: MessageCircle, name: 'WhatsApp', url: 'https://wa.me/2348134567890' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-dark)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={exampleImage} 
                alt="Mpraise Yogurt" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-100 leading-relaxed">
              Port Harcourt's favorite yogurt brand. Made with love, crafted with tradition, 
              delivered with care. Experience the authentic taste of premium yogurt.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-10 h-10 p-0 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <Icon size={18} />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => onPageChange('products')}
                    className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {product}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="space-y-4 text-blue-100">
              <div>
                <p className="font-medium text-white mb-1">Address</p>
                <p>123 Aba Road, GRA Phase 2</p>
                <p>Port Harcourt, Rivers State</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone</p>
                <p>+234 813 456 7890</p>
                <p>+234 807 123 4567</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <p>hello@mpraiseyogurt.com</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Business Hours</p>
                <p>Mon-Fri: 8AM - 6PM</p>
                <p>Sat: 9AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for special offers, new product launches, and yogurt tips!
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
              />
              <Button className="bg-white text-[var(--brand-blue)] hover:bg-gray-100 rounded-full px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-blue-100">
              <p>&copy; 2024 Mpraise Yogurt. All rights reserved.</p>
              <Heart size={16} className="text-red-400" />
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-blue-100 hover:text-white transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-blue-100 hover:text-white transition-colors text-sm">
                Terms of Service
              </button>
              <button 
                onClick={() => window.open('https://linktr.ee/tmb', '_blank')}
                className="text-blue-100 hover:text-white transition-colors text-sm flex items-center space-x-1 group"
              >
                <span>Design by TMB</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}