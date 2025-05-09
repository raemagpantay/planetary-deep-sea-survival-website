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

export default function CustomNavbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem('userEmail');
    if (email) {
      setIsSignedIn(true);
      setUserEmail(email);
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem('userEmail');
    setIsSignedIn(false);
    setUserEmail('');
    router.push('/sign-in');
  };

  return (
    <Navbar fluid rounded className="bg-transparent">
      <NavbarBrand href="/">
        <img
          src="/images/life_sea_ocean_fish_tang_yellow.svg"
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
              img={isSignedIn ? undefined : "/images/abstract-user-flat-4.svg"}
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
                <span className="block text-sm">{userEmail}</span>
              </DropdownHeader>
              <DropdownItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownItem>
              <DropdownItem onClick={() => router.push('/settings')}>Settings</DropdownItem>
              <DropdownDivider />
              <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
            </>
          )}
        </Dropdown>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}