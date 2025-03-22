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
  UsersIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

function ProfilePage() {
  const navigate = useNavigate();
  const [user] = useState({
    name: "John Doe",
    username: "@johndoe",
    bio: "Step into the future of event management with a platform designed to simplify collaboration.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
  });

  const followedCommunities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 250,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      name: "Design Hub",
      members: 180,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const myCommunities = [
    {
      id: 1,
      name: "Startup Network",
      members: 320,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const savedEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "March 20, 2024",
      location: "Design Studio",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const filledForms = [
    {
      id: 1,
      eventTitle: "Annual Tech Symposium",
      submittedDate: "March 1, 2024",
      status: "Approved"
    },
    {
      id: 2,
      eventTitle: "Design Workshop",
      submittedDate: "March 5, 2024",
      status: "Pending"
    }
  ];

  const menuItems = [
    {
      title: "Followed Communities",
      description: "All the communities which is followed by you",
      icon: UserGroupIcon,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {followedCommunities.map((community) => (
            <div key={community.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <img
                src={community.image}
                alt={community.name}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium">{community.name}</h4>
                <p className="text-sm text-muted-foreground">{community.members} members</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "My Communities",
      description: "Communities which is created by you is here",
      icon: UsersIcon,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {myCommunities.map((community) => (
            <div key={community.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <img
                src={community.image}
                alt={community.name}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium">{community.name}</h4>
                <p className="text-sm text-muted-foreground">{community.members} members</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Saved Events",
      description: "Saved, engaged and recently viewed events",
      icon: BookmarkIcon,
      content: (
        <div className="grid grid-cols-1 gap-4">
          {savedEvents.map((event) => (
            <div key={event.id} className="flex gap-4 p-3 rounded-lg bg-muted/30">
              <img
                src={event.image}
                alt={event.title}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Filled Forms",
      description: "The filled form by you associated with different events",
      icon: ClipboardDocumentListIcon,
      content: (
        <div className="space-y-4">
          {filledForms.map((form) => (
            <div key={form.id} className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium">{form.eventTitle}</h4>
              <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                <span>Submitted: {form.submittedDate}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  form.status === 'Approved' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {form.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Settings",
      description: "Feature under development",
      icon: Cog6ToothIcon,
      content: (
        <div className="text-center py-8">
          <Cog6ToothIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Settings feature is under development.</p>
        </div>
      )
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
              <Dialog key={item.title}>
                <DialogTrigger className="w-full">
                  <div className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors w-full text-left">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {item.content}
                  </div>
                </DialogContent>
              </Dialog>
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