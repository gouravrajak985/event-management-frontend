import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, PencilIcon } from '@heroicons/react/24/outline';

function CreateProfilePage() {
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile creation logic
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center gradient-text">
            Create Profile
          </h2>
          <p className="mt-2 text-center text-gray-400">
            Tell us a little about yourself
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative">
                <UserIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="input-field pl-10"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="bio" className="sr-only">
                Bio
              </label>
              <div className="relative">
                <PencilIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  className="input-field pl-10"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProfilePage;