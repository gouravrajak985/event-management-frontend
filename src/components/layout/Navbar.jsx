import { Link } from 'react-router-dom';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { Input } from '../ui/input';

function Navbar() {
  return (
    <div className="h-16 fixed top-0 left-0 right-0 border-b bg-background z-50">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold">
            EventHub
          </Link>
          <div className="hidden md:block w-96">
            <Input 
              type="search" 
              placeholder="Search events and communities..." 
              className="w-full"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-secondary">
            <BellIcon className="h-5 w-5" />
          </button>
          <Link 
            to="/profile" 
            className="p-2 rounded-full hover:bg-secondary"
          >
            <UserIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;