import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OTPVerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement OTP verification logic
    navigate('/create-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center gradient-text">
            Verify Email
          </h2>
          <p className="mt-2 text-center text-gray-400">
            We've sent a verification code to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-2xl input-field"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          <button type="submit" className="btn-primary w-full">
            Verify Email
          </button>

          <div className="text-center">
            <button type="button" className="text-neon-cyan hover:text-neon-pink">
              Resend Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OTPVerificationPage;