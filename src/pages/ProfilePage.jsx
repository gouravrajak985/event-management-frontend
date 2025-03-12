import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { PencilIcon } from '@heroicons/react/24/outline';

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
    // Add more events...
  ];

  const followedCommunities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 250,
      role: "Member"
    },
    // Add more communities...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="card mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full ring-2 ring-neon-cyan/30"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.username}</p>
              <p className="text-gray-300 mt-2">{user.bio}</p>
            </div>
          </div>
          <button className="btn-secondary">
            <PencilIcon className="h-5 w-5" />
            <span className="ml-2">Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tab.Group>
        <Tab.List className="flex space-x-4 border-b border-primary-700/50 mb-8">
          <Tab className={({ selected }) =>
            `px-4 py-2 text-sm font-medium focus:outline-none ${
              selected
                ? 'text-neon-cyan border-b-2 border-neon-cyan'
                : 'text-gray-400 hover:text-gray-300'
            }`
          }>
            Registered Events
          </Tab>
          <Tab className={({ selected }) =>
            `px-4 py-2 text-sm font-medium focus:outline-none ${
              selected
                ? 'text-neon-cyan border-b-2 border-neon-cyan'
                : 'text-gray-400 hover:text-gray-300'
            }`
          }>
            Followed Communities
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="space-y-4">
              {registeredEvents.map((event) => (
                <div key={event.id} className="card flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    <p className="text-gray-400">{event.date}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary-700 text-neon-cyan">
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="space-y-4">
              {followedCommunities.map((community) => (
                <div key={community.id} className="card flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{community.name}</h3>
                    <p className="text-gray-400">{community.members} members</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary-700 text-white">
                    {community.role}
                  </span>
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default ProfilePage;