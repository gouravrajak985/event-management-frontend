import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserGroupIcon } from '@heroicons/react/24/outline';

function CommunityDetailPage() {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  const community = {
    name: "Tech Innovators",
    description: "A community for tech enthusiasts and innovators...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    members: 250,
    events: [
      {
        id: 1,
        title: "Weekly Tech Meetup",
        date: "Every Thursday",
        description: "Join us for discussions on the latest tech trends"
      },
      // Add more events...
    ]
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Implement follow logic
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Community Header */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{community.name}</h1>
              <div className="flex items-center text-gray-300">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                {community.members} members
              </div>
            </div>
            <button
              onClick={handleFollow}
              className={`${isFollowing ? 'btn-secondary' : 'btn-primary'}`}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Community Description */}
        <div className="md:col-span-2">
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-4">About</h2>
            <p className="text-gray-300">{community.description}</p>
          </div>

          {/* Community Events */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {community.events.map((event) => (
                <div key={event.id} className="card">
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-400 mt-1">{event.date}</p>
                  <p className="text-gray-300 mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-4">Community Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Total Members</p>
                <p className="text-2xl font-bold text-white">{community.members}</p>
              </div>
              <div>
                <p className="text-gray-400">Events Organized</p>
                <p className="text-2xl font-bold text-white">{community.events.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailPage;