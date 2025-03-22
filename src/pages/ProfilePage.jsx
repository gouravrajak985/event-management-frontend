import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PencilIcon, 
  ArrowLeftIcon,
  BookmarkIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
  ArrowLeftOnRectangleIcon,
  UserGroupIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';

function ProfilePage() {
  const navigate = useNavigate();
  const [user] = useState({
    name: "John Doe",
    username: "@johndoe",
    bio: "Step into the future of event management with a platform designed to simplify collaboration.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
  });

  const menuItems = [
    {
      title: "Followed Communities",
      description: "All the communities which is followed by you",
      icon: UserGroupIcon,
      path: "/profile/followed-communities"
    },
    {
      title: "My Communities",
      description: "Communities which is created by you is here",
      icon: UsersIcon,
      path: "/profile/my-communities"
    },
    {
      title: "Saved Events",
      description: "Saved, engaged and recently viewed events",
      icon: BookmarkIcon,
      path: "/profile/saved-events"
    },
    {
      title: "Filled Forms",
      description: "The filled form by you associated with different events",
      icon: ClipboardDocumentListIcon,
      path: "/profile/forms"
    },
    {
      title: "Settings",
      description: "Feature under development",
      icon: Cog6ToothIcon,
      path: "/profile/settings"
    }
  ];

  const footerLinks = [
    { title: "FAQs", path: "/faqs" },
    { title: "About us", path: "/about" },
    { title: "Credits", path: "/credits" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms & Conditions", path: "/terms" }
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Info */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-primary/10">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
          <p className="text-muted-foreground mb-3">{user.username}</p>
          <p className="text-sm text-muted-foreground max-w-md mb-4">{user.bio}</p>
          <Button variant="outline" className="flex items-center gap-2">
            <PencilIcon className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Menu Items */}
        <div className="space-y-3 mb-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </Link>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="mb-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-4 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/5 transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            <span>Logout</span>
          </button>
          <p className="text-sm text-center text-muted-foreground mt-2">
            You can login again securely
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;