import React, { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AuthenticationProps {
  onAuthenticate: () => void;
  secretAnswer: string;
}

export function Authentication({ onAuthenticate, secretAnswer }: AuthenticationProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === secretAnswer) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onAuthenticate();
    } else {
      setError('That\'s not my PIN, baby. Try again ❤️');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-md w-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <Lock className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter My PIN</h2>
          <p className="text-gray-600">Please enter my phone PIN to unlock my heart</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-2 text-center text-2xl tracking-widest border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="• • • •"
              maxLength={4}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Unlock My Heart
          </button>
        </form>
      </div>
    </div>
  );
}