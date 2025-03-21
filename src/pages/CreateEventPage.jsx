import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoIcon, ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';

function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    uniqueId: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    capacity: '',
    banner: null
  });
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, banner: file });
    }
  };

  const generateUniqueId = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      uniqueId: generateUniqueId(title)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement event creation logic
    navigate('/events/1');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Create Event</h1>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="col-span-2 space-y-6">
            <div className="aspect-[3/1] rounded-lg border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center p-6">
              {formData.banner ? (
                <img
                  src={URL.createObjectURL(formData.banner)}
                  alt="Banner preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <PhotoIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <div className="text-center">
                    <label className="text-primary hover:text-primary/80 cursor-pointer">
                      Upload banner image
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="text-sm text-muted-foreground mt-2">
                      Recommended size: 1200x400px
                    </p>
                  </div>
                </>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Event Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="input-field"
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="Enter event title"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Event Unique ID
              </label>
              <input
                type="text"
                className="input-field bg-muted"
                value={formData.uniqueId}
                disabled
                placeholder="Auto-generated from title"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date
                </label>
                <div className="relative">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground absolute left-3 top-2" />
                  <input
                    type="date"
                    className="input-field pl-10"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Capacity
                </label>
                <div className="relative">
                  <UsersIcon className="h-5 w-5 text-muted-foreground absolute left-3 top-2" />
                  <input
                    type="number"
                    className="input-field pl-10"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="Maximum attendees"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Start Time
                </label>
                <div className="relative">
                  <ClockIcon className="h-5 w-5 text-muted-foreground absolute left-3 top-2" />
                  <input
                    type="time"
                    className="input-field pl-10"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  End Time
                </label>
                <div className="relative">
                  <ClockIcon className="h-5 w-5 text-muted-foreground absolute left-3 top-2" />
                  <input
                    type="time"
                    className="input-field pl-10"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Location
              </label>
              <div className="relative">
                <MapPinIcon className="h-5 w-5 text-muted-foreground absolute left-3 top-2" />
                <input
                  type="text"
                  className="input-field pl-10"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Event location"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Event Description
              </label>
              <textarea
                className="input-field min-h-[120px]"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your event..."
              />
            </div>

            <div className="mt-8">
              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={!formData.title || !formData.banner}
              >
                Create Event
              </Button>
            </div>
          </div>

          {/* Instructions Box */}
          <div className="col-span-1">
            <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Instructions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Upload a banner image that represents your event</li>
                <li>• Pick a descriptive title for your event</li>
                <li>• Set the date and time accurately</li>
                <li>• Specify the location where the event will be held</li>
                <li>• Set a reasonable capacity limit</li>
                <li>• Write a clear description of what attendees can expect</li>
                <li>• The unique ID will be automatically generated from your event title</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEventPage;