'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import './landing.css';
import { useEffect } from 'react';
import { Component as NavbarWithDropdown } from './index'; // Import the Navbar component

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log({ user });

  return (
    <main>
      {/* Render the Navbar */}
      <NavbarWithDropdown />

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
            Play with friends and explore the depths together.
          </div>
        </section>
      </div>
    </main>
  );
}