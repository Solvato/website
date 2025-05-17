import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500/20 via-green-500/20 to-blue-900/20">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <div className="mb-12">
          <img 
            src="https://images.pexels.com/photos/18115890/pexels-photo-18115890.jpeg" 
            alt="Solvato Consultancy" 
            className="w-64 h-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          The Future is Taking Shape – Solvato is Coming Soon
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl">
          We're building something revolutionary in tech. Be the first to know when we launch.
        </p>
        <form className="w-full max-w-md">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Notify Me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;