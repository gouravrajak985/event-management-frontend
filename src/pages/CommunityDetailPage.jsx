import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserGroupIcon, CalendarIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Button } from '../components/ui/button';

function CommunityDetailPage() {
  const { id } = useParams();
  const [isAdmin] = useState(true); // TODO: Replace with actual admin check
  const [isFollowing, setIsFollowing] = useState(false);

  const community = {
    name: "Tech Innovators",
    description: "A community for tech enthusiasts and innovators dedicated to exploring and sharing the latest technological advancements and innovations.",
    banner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    logo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=200",
    followers: 250,
    coreMembers: [
      {
        id: 1,
        name: "John Doe",
        role: "Admin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "Moderator",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
      }
    ],
    events: [
      {
        id: 1,
        title: "Weekly Tech Meetup",
        date: "March 15, 2024",
        time: "6:00 PM",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
        attendees: 45
      },
      {
        id: 2,
        title: "Coding Workshop",
        date: "March 20, 2024",
        time: "2:00 PM",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000",
        attendees: 30
      }
    ],
    liveEvents: [
      {
        id: 1,
        title: "Live Coding Session",
        startTime: "2:00 PM",
        viewers: 120,
        thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
      }
    ],
    updates: [
      {
        id: 1,
        title: "New Workshop Series Announced",
        content: "We're excited to announce our new workshop series on AI and Machine Learning starting next month!",
        date: "2 hours ago",
        likes: 24,
        comments: 8
      },
      {
        id: 2,
        title: "Community Milestone",
        content: "We've reached 250 members! Thank you for being part of this amazing community.",
        date: "1 day ago",
        likes: 56,
        comments: 12
      }
    ]
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="pl-20 pt-16 min-h-screen bg-background">
      {/* Banner and Community Info */}
      <div className="relative h-[300px] w-[calc(100vw-5rem)]">
        <img
          src={community.banner}
          alt={community.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24 mb-8 flex justify-between">
          <div className="flex items-end">
            <div className="h-32 w-32 rounded-xl overflow-hidden border-4 border-background">
              <img
                src={community.logo}
                alt={`${community.name} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-6 mb-1">
              <h1 className="text-3xl font-bold">{community.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mt-2">
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  {community.followers} followers
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {community.events.length} events
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-3">
            {isAdmin ? (
              <>
                <Button variant="outline" className="flex items-center gap-2">
                  <PencilIcon className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button className="flex items-center gap-2">
                  <PlusIcon className="h-4 w-4" />
                  Create Event
                </Button>
              </>
            ) : (
              <Button
                variant={isFollowing ? "outline" : "default"}
                onClick={handleFollow}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          {community.description}
        </p>

        {/* Core Members */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Core Members</h2>
          <div className="flex gap-4">
            {community.coreMembers.map(member => (
              <div key={member.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="events" className="space-y-8">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="live-events">Live Events</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {community.events.map(event => (
                <div key={event.id} className="card group">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {event.date}, {event.time}
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-2" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="live-events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {community.liveEvents.map(event => (
                <div key={event.id} className="card group">
                  <div className="relative">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-1 rounded bg-red-500 text-white text-sm">
                      LIVE
                    </div>
                  </div>
                  <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Started at {event.startTime}
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-2" />
                      {event.viewers} watching
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="updates" className="space-y-6">
            {community.updates.map(update => (
              <div key={update.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-lg">{update.title}</h3>
                  <span className="text-sm text-muted-foreground">{update.date}</span>
                </div>
                <p className="text-muted-foreground mb-4">{update.content}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="hover:text-primary">
                    {update.likes} likes
                  </button>
                  <button className="hover:text-primary">
                    {update.comments} comments
                  </button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CommunityDetailPage;