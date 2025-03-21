import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UsersIcon, CalendarIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline';

const navItems = [
  { icon: HomeIcon, label: 'Home', path: '/home' },
  { icon: UsersIcon, label: 'Communities', path: '/communities' },
  { icon: CalendarIcon, label: 'Events', path: '/events' },
  { icon: PlusCircleIcon, label: 'Create', path: '/create' },
  { icon: UserIcon, label: 'Profile', path: '/profile' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-16 md:w-64 h-screen fixed left-0 top-16 border-r bg-background">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                  ${isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;