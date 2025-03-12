import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      category: "Technology",
      registeredCount: 150
    },
    // Add more events...
  ];

  const communities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 250,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
      description: "A community for tech enthusiasts and innovators"
    },
    // Add more communities...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Section */}
      <div className="mb-8">
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Search events and communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Events Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          <Link to="/events" className="text-neon-cyan hover:text-neon-pink">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link key={event.id} to={`/events/${event.id}`} className="card group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                </div>
                <span className="text-neon-cyan">{event.registeredCount} registered</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Communities Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Popular Communities</h2>
          <div className="flex items-center space-x-4">
            <Link to="/communities/create" className="btn-secondary">
              Create Community
            </Link>
            <Link to="/communities" className="text-neon-cyan hover:text-neon-pink">
              View all
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Link key={community.id} to={`/communities/${community.id}`} className="card group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{community.name}</h3>
              <p className="text-gray-400 mt-1">{community.members} members</p>
              <p className="text-gray-400 mt-2 line-clamp-2">{community.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;