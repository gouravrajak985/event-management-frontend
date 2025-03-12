import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/outline';

function CreatePasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // TODO: Implement password creation logic
      navigate('/create-profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center gradient-text">
            Create Password
          </h2>
          <p className="mt-2 text-center text-gray-400">
            Choose a strong password for your account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="input-field pl-10"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <LockClosedIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="input-field pl-10"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePasswordPage;