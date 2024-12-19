import React, { useState } from 'react';
import { Send } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be among the first to experience the future of financial operations
          </p>
          
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              Thanks for joining! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                Join
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;