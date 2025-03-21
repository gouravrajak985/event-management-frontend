import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, UserGroupIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

function EventDetailPage() {
  const { id } = useParams();
  const [isAdmin] = useState(true); // TODO: Replace with actual admin check
  const [isRegistered, setIsRegistered] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    title: '',
    content: '',
  });

  const event = {
    title: "Annual Tech Symposium",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Join us for a day of technological innovation and networking. This symposium brings together industry experts, academics, and students to explore cutting-edge developments in technology.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    organizer: "Tech Club",
    registeredCount: 150,
    capacity: 200,
    updates: [
      {
        id: 1,
        title: "Speaker Announcement",
        content: "We're excited to announce our keynote speaker, Dr. Jane Smith, who will discuss AI innovations.",
        date: "2 hours ago",
        likes: 24,
        comments: 8
      },
      {
        id: 2,
        title: "Schedule Update",
        content: "The workshop timings have been adjusted. Please check the updated schedule.",
        date: "1 day ago",
        likes: 56,
        comments: 12
      }
    ]
  };

  const handleRegister = () => {
    setIsRegistered(!isRegistered);
    // TODO: Implement registration logic
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement update creation logic
    setShowUpdateForm(false);
    setUpdateForm({ title: '', content: '' });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement event edit logic
    setShowEditForm(false);
  };

  return (
    <div className="main-layout">
      <div className="main-content">
        <div className="scrollable-content">
          <div className="banner-container">
            <div className="banner-image">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="mb-8">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-bold">{event.title}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground mt-2">
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
                      {event.registeredCount}/{event.capacity} registered
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isAdmin ? (
                    <>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => setShowEditForm(true)}
                      >
                        <PencilIcon className="h-4 w-4" />
                        Edit Event
                      </Button>
                      <Button
                        className="flex items-center gap-2"
                        onClick={() => setShowUpdateForm(true)}
                      >
                        <PlusIcon className="h-4 w-4" />
                        Post Update
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant={isRegistered ? "outline" : "default"}
                      onClick={handleRegister}
                    >
                      {isRegistered ? 'Cancel Registration' : 'Register Now'}
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                {/* Description */}
                <div className="card">
                  <h2 className="text-xl font-semibold mb-4">About the Event</h2>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>

                {/* Update Form */}
                {showUpdateForm && (
                  <div className="card">
                    <h2 className="text-xl font-semibold mb-4">Post Update</h2>
                    <form onSubmit={handleUpdateSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Update Title
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          value={updateForm.title}
                          onChange={(e) => setUpdateForm({ ...updateForm, title: e.target.value })}
                          placeholder="Enter update title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Update Content
                        </label>
                        <textarea
                          className="input-field min-h-[100px]"
                          value={updateForm.content}
                          onChange={(e) => setUpdateForm({ ...updateForm, content: e.target.value })}
                          placeholder="Enter update content"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">Post Update</Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowUpdateForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Edit Form */}
                {showEditForm && (
                  <div className="card">
                    <h2 className="text-xl font-semibold mb-4">Edit Event</h2>
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Event Title
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          defaultValue={event.title}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Date
                          </label>
                          <input
                            type="date"
                            className="input-field"
                            defaultValue={event.date}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Time
                          </label>
                          <input
                            type="time"
                            className="input-field"
                            defaultValue={event.time}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          defaultValue={event.location}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Description
                        </label>
                        <textarea
                          className="input-field min-h-[100px]"
                          defaultValue={event.description}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Capacity
                        </label>
                        <input
                          type="number"
                          className="input-field"
                          defaultValue={event.capacity}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">Save Changes</Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowEditForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Updates */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Event Updates</h2>
                  {event.updates.map((update) => (
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
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="card sticky top-24">
                  <div className="text-center mb-6">
                    <p className="text-2xl font-bold">
                      {event.registeredCount}/{event.capacity}
                    </p>
                    <p className="text-muted-foreground">spots remaining</p>
                  </div>
                  {!isAdmin && (
                    <Button
                      className="w-full"
                      variant={isRegistered ? "outline" : "default"}
                      onClick={handleRegister}
                    >
                      {isRegistered ? 'Cancel Registration' : 'Register Now'}
                    </Button>
                  )}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Organized by</h3>
                    <p className="text-muted-foreground">{event.organizer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;