'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import './landing.css';
import { useEffect } from 'react';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log({ user });

  useEffect(() => {
  const email = sessionStorage.getItem('userEmail');
  if (email) {
    // You can use this if you need the email in the landing page
  }
}, [user]);

  return (
    <main>
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="wave">
            PLANETARY DEEP SEA SURVIVAL
          </div>
          <p className="mt-4 text-lg text-gray-200">
            Dive into the depths and explore the mysteries of the ocean.
          </p>
          <a
            href="/files/PlanetaryDeepSeaSurvival.apk" // Replace with the actual path to your APK file
            download
            className="btn-6 mt-6 inline-block text-center text-white font-semibold no-underline"
          >
            <span>Download</span>
          </a>
        </section>
        {/* Features Section */}
        <section id="features" className="features">
          <h2 className="text-2xl font-bold text-center mb-6">Game Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card">
              <h3 className="text-xl font-semibold">Immersive Gameplay</h3>
              <p className="text-gray-200">
              Dive into a realistic underwater world with stunning visuals and engaging mechanics.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold">Stunning Graphics</h3>
              <p className="text-gray-200">
              Experience breathtaking underwater environments and creatures.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold">Multiplayer Mode</h3>
              <p className="text-gray-200">
              Play with friends and explore the depths together.
              </p>
            </div>
            </div>
        </section>
         {/* Screenshots Section */}
        <section id="screenshots" className="screenshots">
          <h2>Game Screenshots</h2>
          <div className="screenshot-gallery">
            <div className="screenshot-item">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/screenshot1.jpg`} alt="Screenshot 1" />
              <p>Explore the underwater world</p>
            </div>
            <div className="screenshot-item">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/screenshot2.jpg`} alt="Screenshot 2" />
              <p>Battle sea creatures</p>
            </div>
            <div className="screenshot-item">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/screenshot3.jpg`} alt="Screenshot 3" />
              <p>Survive the depths</p>
            </div>
          </div>
        </section>

        {/* Trailer Section */}
        <section id="trailer" className="trailer">
          <h2>Game Trailer</h2>
          <div className="trailer-container">
            <div className="video-placeholder">
              <p className="text-gray-200">
                Get ready for an epic underwater adventure!
                <br />
                <br />
                Watch the trailer to see the stunning graphics and gameplay.
                <br />  
                Watch the game trailer here!
              </p>
              <div className="video-thumbnail">
                <video
                  src="/videos/2025-05-08_18-55-46.mp4" // Corrected file path
                  controls
                  className="w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

         {/* About Us Section */}
        <section id="about" className="about">
          <h2 className="text-2xl font-bold text-center mb-6">About Us</h2>
          <p className="text-center text-lg text-gray-200 max-w-3xl mx-auto">
            Planetary Deep Sea Survival is a thrilling underwater adventure game that combines exploration, survival, and multiplayer gameplay. 
            Our mission is to create an immersive experience that allows players to dive into the mysteries of the ocean, battle sea creatures, 
            and uncover hidden treasures. Join us on this journey and explore the depths like never before!
          </p>
        </section>

        {/* Players Section */}
        <section id="players" className="players">
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="text-center text-gray-400 py-4">
            <p>&copy; 2025 Planetary Deep Sea Survival. All rights reserved.</p>
            <p>
              Follow us on 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">Twitter</a>, 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">Facebook</a>, and 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">Instagram</a>.
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}