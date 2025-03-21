import { Link } from 'react-router-dom';
import { UserGroupIcon } from '@heroicons/react/24/outline';

function HomePage() {
  const communities = [
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
    },
    {
      id: 3,
      name: "Startup Network",
      members: 320,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      name: "Creative Arts",
      members: 150,
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      attendees: 150
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000",
      attendees: 80
    },
    {
      id: 3,
      title: "Startup Meetup",
      date: "March 25, 2024",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
      attendees: 200
    }
  ];

  return (
    <div className="main-layout">
      <div className="scrollable-content">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          {/* Communities Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold">Communities</h2>
              <Link 
                to="/communities" 
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                See all
              </Link>
            </div>
            
            <div className="horizontal-scroll flex gap-4 pb-4">
              {communities.map((community) => (
                <Link
                  key={community.id}
                  to={`/communities/${community.id}`}
                  className="flex flex-col gap-3 min-w-[140px] md:min-w-[160px] group"
                >
                  <div className="w-[140px] h-[140px] md:w-40 md:h-40 rounded-lg bg-gradient-to-tr from-primary/10 to-primary/5 p-[1px] overflow-hidden">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-background">
                      <img
                        src={community.image}
                        alt={community.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium truncate">{community.name}</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <UserGroupIcon className="h-3.5 w-3.5 mr-1" />
                      {community.members} members
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold">Upcoming Events</h2>
              <Link 
                to="/events" 
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                See all
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {events.map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="group"
                >
                  <div className="card hover:bg-muted/50 transition-colors">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-medium mb-2">{event.title}</h3>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{event.date}</span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;