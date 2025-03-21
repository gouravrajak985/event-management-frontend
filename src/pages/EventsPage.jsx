import { Link } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, PlusIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description: "Join us for a day of technological innovation and networking with industry experts. Learn about the latest trends and connect with fellow tech enthusiasts.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      attendees: 150,
      capacity: 200
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Design Studio",
      description: "A hands-on workshop exploring modern design principles and tools. Perfect for both beginners and experienced designers.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000",
      attendees: 80,
      capacity: 100
    },
    {
      id: 3,
      title: "Startup Meetup",
      date: "March 25, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Innovation Hub",
      description: "Network with fellow entrepreneurs and learn from successful startup founders. Share ideas and get valuable feedback.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
      attendees: 120,
      capacity: 150
    },
    {
      id: 4,
      title: "Cultural Festival",
      date: "April 5, 2024",
      time: "11:00 AM - 8:00 PM",
      location: "Campus Square",
      description: "Celebrate diversity through music, dance, food, and art. Experience different cultures and traditions from around the world.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
      attendees: 300,
      capacity: 500
    }
  ];

  return (
    <div className="md:pl-20 pt-16 pb-20 md:pb-0 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl md:text-2xl font-bold">Events</h1>
          <Link
            to="/events/create"
            className="inline-flex items-center px-3 md:px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
          >
            <PlusIcon className="h-5 w-5 mr-1 md:mr-2" />
            <span className="hidden md:inline">Create Event</span>
            <span className="md:hidden">New</span>
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
                <h3 className="font-medium text-base md:text-lg mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.date}, {event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.attendees}/{event.capacity} attending
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;