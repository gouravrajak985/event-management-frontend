import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center gradient-text">
            Create Account
          </h2>
          <p className="mt-2 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-neon-cyan hover:text-neon-pink">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <div className="relative">
                <UserIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-field pl-10"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input-field pl-10"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Continue
          </button>

          <p className="text-sm text-gray-400 text-center">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-neon-cyan hover:text-neon-pink">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-neon-cyan hover:text-neon-pink">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;