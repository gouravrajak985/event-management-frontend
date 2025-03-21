import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UsersIcon, CalendarIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

const mainNavItems = [
  { icon: HomeIcon, path: '/home', label: 'Home' },
  { icon: UsersIcon, path: '/communities', label: 'Communities' },
  { icon: CalendarIcon, path: '/events', label: 'Events' },
  { icon: PlusCircleIcon, path: '/create', label: 'Create' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-20 h-[calc(100vh-4rem)] fixed left-0 top-16 border-r bg-background">
      <nav className="h-full p-4">
        <div className="space-y-4">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-center p-4 rounded-xl transition-colors group relative
                  ${isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
              >
                <Icon className="h-7 w-7" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-secondary rounded text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;