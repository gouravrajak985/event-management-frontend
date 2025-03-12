import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoIcon } from '@heroicons/react/24/outline';

function CreateCommunityPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement community creation logic
    navigate('/communities/1'); // Navigate to the newly created community
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="card">
        <h1 className="text-3xl font-bold text-white mb-8">Create Community</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Community Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-primary-700 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-400">
                  <label htmlFor="image-upload" className="relative cursor-pointer rounded-md font-medium text-neon-cyan hover:text-neon-pink">
                    <span>Upload a file</span>
                    <input
                      id="image-upload"
                      name="image-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Community Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Community Name
            </label>
            <input
              type="text"
              id="name"
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Community Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="input-field"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Community
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCommunityPage;