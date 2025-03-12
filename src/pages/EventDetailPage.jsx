import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function EventDetailPage() {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);

  const event = {
    title: "Annual Tech Symposium",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Join us for a day of technological innovation and networking...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    organizer: "Tech Club",
    registeredCount: 150,
    capacity: 200
  };

  const handleRegister = () => {
    setIsRegistered(!isRegistered);
    // TODO: Implement registration logic
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Event Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="card">
            <h1 className="text-3xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                {event.date}, {event.time}
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                {event.location}
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                {event.registeredCount} registered
              </div>
            </div>
            <div className="prose prose-invert">
              <h2 className="text-xl font-semibold text-white mb-2">About the Event</h2>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="card sticky top-24 h-fit">
          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-white">
              {event.registeredCount}/{event.capacity}
            </p>
            <p className="text-gray-400">spots remaining</p>
          </div>
          <button
            onClick={handleRegister}
            className={`w-full ${isRegistered ? 'btn-secondary' : 'btn-primary'}`}
          >
            {isRegistered ? 'Cancel Registration' : 'Register Now'}
          </button>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Organized by</h3>
            <p className="text-gray-400">{event.organizer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;