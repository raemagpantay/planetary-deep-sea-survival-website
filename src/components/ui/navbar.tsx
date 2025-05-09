'use client';
import { useState, useEffect } from 'react';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { withBasePath } from '@/utils/paths'; // Added import

export default function CustomNavbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
        setUserEmail(user.email || '');
        sessionStorage.setItem('userEmail', user.email || '');
      } else {
        setIsSignedIn(false);
        setUserEmail('');
        sessionStorage.removeItem('userEmail');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Navbar fluid rounded className="bg-transparent">
      <NavbarBrand href="/planetary-deep-sea-survival-website/">
        <img
          src={withBasePath("/images/life_sea_ocean_fish_tang_yellow.svg")}
          className="mr-3 h-6 sm:h-9"
          alt="Game Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={isSignedIn ? undefined : withBasePath("/images/abstract-user-flat-4.svg")} // Updated path
              rounded
              placeholderInitials={isSignedIn && userEmail ? userEmail[0].toUpperCase() : undefined}
              bordered
              className="border-2 border-gray-300"
            />
          }
        >
          {!isSignedIn ? (
            <DropdownItem onClick={() => router.push('/sign-in')}>Sign In</DropdownItem>
          ) : (
            <>
              <DropdownHeader>
                <span className="block text-sm font-medium text-gray-900 dark:text-white">
                  {userEmail}
                </span>
              </DropdownHeader>
              <DropdownItem onClick={() => router.push('/dashboard')}>
                Dashboard
              </DropdownItem>
              <DropdownItem onClick={() => router.push('/settings')}>
                Settings
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem 
                onClick={handleSignOut}
                className="text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-700"
              >
                Sign Out
              </DropdownItem>
            </>
          )}
        </Dropdown>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}