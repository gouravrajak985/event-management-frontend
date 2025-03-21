import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

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
    <div className="pl-16 md:pl-64 pt-16">
      <div className="p-6">
        {/* Communities Stories Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Communities</h2>
            <Link to="/communities" className="text-sm text-primary hover:underline">
              See all
            </Link>
          </div>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {/* Create Story Button */}
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-2 border-border relative">
                  <PlusIcon className="h-6 w-6" />
                </div>
                <span className="text-xs text-center font-medium">Create New</span>
              </div>
              
              {/* Community Stories */}
              {communities.map((community) => (
                <Link
                  key={community.id}
                  to={`/communities/${community.id}`}
                  className="flex flex-col items-center space-y-2 flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 p-[2px]">
                    <div className="w-full h-full rounded-full border-2 border-background overflow-hidden">
                      <img
                        src={community.image}
                        alt={community.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-center font-medium max-w-[76px] truncate">
                    {community.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <Link to="/events" className="text-sm text-primary hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="card group hover:shadow-md transition-shadow"
              >
                <div className="aspect-video rounded-md overflow-hidden mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold">{event.title}</h3>
                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span>{event.attendees} attending</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;