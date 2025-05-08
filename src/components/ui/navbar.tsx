'use client';
import { useState } from "react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { useRouter } from "next/navigation";

export default function CustomNavbar() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in state
  const router = useRouter();

  const handleSignIn = () => {
    // Redirect to the sign-in page
    router.push("/sign-in");
  };

  const handleSignOut = () => {
    // Sign out logic here
    setIsSignedIn(false);
  };

  return (
    <Navbar fluid rounded className="bg-transparent">
      <NavbarBrand href="/">
        <img
          src="/images/life_sea_ocean_fish_tang_yellow.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Game Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="/images/abstract-user-flat-4.svg"
              rounded
            />
          }
        >
          {!isSignedIn ? (
            <DropdownItem onClick={handleSignIn}>Sign In</DropdownItem>
          ) : (
            <>
              <DropdownHeader>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </DropdownHeader>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
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