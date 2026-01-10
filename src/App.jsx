import React, { useState } from 'react';
import { MapPin, Utensils, Compass, Camera, Mountain, Heart } from 'lucide-react';

function App() {
  const [activeCard, setActiveCard] = useState(null);

  const destinations = [
    { name: "Taj Mahal", location: "Agra", type: "Heritage" },
    { name: "Jaipur", location: "Rajasthan", type: "Culture" },
    { name: "Kerala", location: "South India", type: "Nature" },
    { name: "Goa", location: "West Coast", type: "Beaches" }
  ];

  const festivals = [
    { name: "Diwali", desc: "Festival of Lights" },
    { name: "Holi", desc: "Festival of Colors" },
    { name: "Navratri", desc: "Nine Nights Dance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-white to-green-600 shadow-lg">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-white/90 rounded-full shadow-md">
            <span className="text-4xl">🇮🇳</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Explore India
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Journey through incredible landscapes, rich heritage, and vibrant cultures
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg">
              Start Exploring
            </button>
            <button className="px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
              View Gallery
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-t-4 border-orange-500"
            onMouseEnter={() => setActiveCard('places')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Destinations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              From the Himalayas to tropical beaches, explore India's diverse landscapes and iconic landmarks.
            </p>
            <div className={`transition-all duration-300 ${activeCard === 'places' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pt-4 border-t border-gray-200">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center gap-3 mb-3 text-sm">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold text-gray-700">{dest.name}</span>
                    <span className="text-gray-500">• {dest.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-t-4 border-green-600"
            onMouseEnter={() => setActiveCard('culture')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Culture & Cuisine</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Immerse yourself in colorful festivals, ancient traditions, and mouth-watering regional dishes.
            </p>
            <div className={`transition-all duration-300 ${activeCard === 'culture' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pt-4 border-t border-gray-200">
                {festivals.map((fest, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="font-semibold text-gray-700 text-sm">{fest.name}</div>
                    <div className="text-xs text-gray-500">{fest.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-t-4 border-blue-500"
            onMouseEnter={() => setActiveCard('travel')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Travel Planning</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Get expert tips, detailed itineraries, and insider knowledge for an unforgettable journey.
            </p>
            <div className={`transition-all duration-300 ${activeCard === 'travel' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Camera className="w-4 h-4 text-blue-500" />
                  <span>Photography Guides</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Route Planning</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Heart className="w-4 h-4 text-blue-500" />
                  <span>Local Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-orange-100">States</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-orange-100">UNESCO Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">22</div>
              <div className="text-orange-100">Languages</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Begin Your Adventure?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of travelers who have discovered the magic of India. Start planning your journey today.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
            Plan Your Trip Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Explore India</h3>
              <p className="text-gray-400 text-sm">Your trusted guide to discovering the wonders of India.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition">Destinations</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Travel Guides</li>
                <li className="hover:text-orange-400 cursor-pointer transition">About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition">Blog</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Travel Tips</li>
                <li className="hover:text-orange-400 cursor-pointer transition">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition">Instagram</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Facebook</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 DS2 – Explore India. Crafted with <Heart className="w-4 h-4 inline text-red-500" /> for travelers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;