import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UsersIcon, CalendarIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline';

const mainNavItems = [
  { icon: HomeIcon, path: '/home' },
  { icon: UsersIcon, path: '/communities' },
  { icon: CalendarIcon, path: '/events' },
  { icon: PlusCircleIcon, path: '/create' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-20 h-screen fixed left-0 top-16 border-r bg-background flex flex-col justify-between pb-4">
      <nav className="p-4">
        <div className="space-y-4">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-center p-4 rounded-xl transition-colors
                  ${isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
              >
                <Icon className="h-7 w-7" />
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4">
        <Link
          to="/profile"
          className={`flex items-center justify-center p-4 rounded-xl transition-colors
            ${location.pathname === '/profile' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
        >
          <UserIcon className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;