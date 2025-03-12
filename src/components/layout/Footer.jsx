import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-secondary-900 border-t border-primary-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">EventHub</h3>
            <p className="text-gray-400">
              Connecting students through meaningful events and communities.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/communities" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Communities
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-700/50">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EventHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;