import React, { useState } from "react";
import {
  Navbar as NavbarComponent,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { IconSpiral } from "@tabler/icons-react";

const EdwhiskLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center px-2 py-1 text-sm font-normal text-black"
    >
      <img src="/logo.PNG" alt="edWhisk Logo" className="h-14 w-14" />
      <span className="text-3xl font-medium text-white -ml-3">
        edwhisk
      </span>
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Process", link: "#process" },
    { name: "Work", link: "#work" },
  ];

  return (
    <div className="w-full">
      <NavbarComponent className="fixed top-0 inset-x-0 mx-auto z-50">
        <NavBody>
          <EdwhiskLogo />
          <div className="hidden lg:flex flex-row items-center justify-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-base font-medium text-neutral-400 hover:text-red-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <NavbarButton
            href="#contact"
            className="bg-red-600 text-white rounded-full px-6 hover:bg-red-700 shadow-none"
          >
            Contact us
          </NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <EdwhiskLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="bg-black border-neutral-800">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="block w-full px-4 py-2 text-lg font-medium text-neutral-400 hover:text-red-600"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full px-4 py-2 text-lg font-medium text-white bg-red-600 hover:bg-red-700 rounded-md text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </a>
          </MobileNavMenu>
        </MobileNav>
      </NavbarComponent>
    </div>
  );
};

export default Navbar;