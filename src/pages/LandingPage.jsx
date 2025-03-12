import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function LandingPage() {
  const featuredEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      category: "Technology"
    },
    {
      id: 2,
      title: "Sports Tournament",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
      category: "Sports"
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "April 5, 2024",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
      category: "Culture"
    }
  ];

  const communities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 250,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      name: "Sports Club",
      members: 180,
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      name: "Art Society",
      members: 120,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Michael Chen",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Emily Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-primary opacity-90">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000')] mix-blend-overlay opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connect, Create, and <span className="gradient-text">Celebrate</span> Together
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our vibrant community of students and discover exciting events, clubs, and opportunities to make your school experience unforgettable.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/signup" className="btn-primary">
              Get Started
            </Link>
            <Link to="/events" className="btn-secondary">
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Events</h2>
            <Link to="/events" className="flex items-center text-neon-cyan hover:text-neon-pink transition-colors">
              View all events <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="card group">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="text-sm text-neon-cyan font-medium">{event.category}</span>
                <h3 className="text-xl font-semibold mt-2 text-white">{event.title}</h3>
                <p className="text-gray-400 mt-1">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-16 bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Communities</h2>
            <Link to="/communities" className="flex items-center text-neon-cyan hover:text-neon-pink transition-colors">
              View all communities <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communities.map((community) => (
              <div key={community.id} className="card group">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img src={community.image} alt={community.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{community.name}</h3>
                <p className="text-gray-400 mt-1">{community.members} members</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Dedicated professionals working together to create meaningful experiences for our school community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-neon-cyan/30">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community today and start exploring exciting events and connecting with like-minded students.
          </p>
          <Link to="/signup" className="btn-primary">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;