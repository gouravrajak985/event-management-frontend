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
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="card mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full ring-2 ring-primary/10"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.username}</p>
              <p className="mt-2">{user.bio}</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
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
            <div key={event.id} className="card flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.date}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">
                {event.status}
              </span>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="communities" className="space-y-4">
          {followedCommunities.map((community) => (
            <div key={community.id} className="card flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{community.name}</h3>
                <p className="text-muted-foreground">{community.members} members</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground">
                {community.role}
              </span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProfilePage;