import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UsersIcon, CalendarIcon, PlusIcon } from '@heroicons/react/24/outline';

const navItems = [
  { icon: HomeIcon, path: '/home', label: 'Home' },
  { icon: UsersIcon, path: '/communities', label: 'Communities' },
  { icon: CalendarIcon, path: '/events', label: 'Events' },
  { icon: PlusIcon, path: '/create', label: 'Create' },
];

function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors
                ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;