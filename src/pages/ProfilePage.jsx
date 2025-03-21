import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

function ProfilePage() {
  const [user] = useState({
    name: "John Doe",
    username: "@johndoe",
    bio: "Tech enthusiast and event organizer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
  });

  const registeredEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Coding Workshop",
      date: "March 20, 2024",
      status: "Registered"
    }
  ];

  const followedCommunities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 250,
      role: "Member"
    },
    {
      id: 2,
      name: "Design Club",
      members: 180,
      role: "Moderator"
    }
  ];

  return (
    <div className="md:pl-20 pt-16 pb-20 md:pb-0 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-4 md:p-8">
        {/* Profile Header */}
        <div className="card mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full ring-2 ring-primary/10"
              />
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.username}</p>
                <p className="mt-2 text-sm md:text-base">{user.bio}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 w-full md:w-auto justify-center"
            >
              <PencilIcon className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="events">Registered Events</TabsTrigger>
            <TabsTrigger value="communities">Followed Communities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="events" className="space-y-4">
            {registeredEvents.map((event) => (
              <div key={event.id} className="card flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground self-start md:self-auto">
                  {event.status}
                </span>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="communities" className="space-y-4">
            {followedCommunities.map((community) => (
              <div key={community.id} className="card flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{community.name}</h3>
                  <p className="text-sm text-muted-foreground">{community.members} members</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground self-start md:self-auto">
                  {community.role}
                </span>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ProfilePage;