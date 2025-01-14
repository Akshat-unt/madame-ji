import React, { useState } from 'react';
import { Authentication } from './components/Authentication';
import { ApologyMessage } from './components/ApologyMessage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <Authentication
        onAuthenticate={() => setIsAuthenticated(true)}
        secretAnswer="1426"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 py-12 px-4">
      <ApologyMessage />
    </div>
  );
}

export default App;