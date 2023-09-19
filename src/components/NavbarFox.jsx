import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";


export default function NavbarFox() {
     const [isMenuOpen, setIsMenuOpen] = React.useState( false );

     const menuItems = [
         {txt:"QUESTIONS",url:"#question"},
          {txt:"TEAM",url:"#team"},
          {txt:"OPENSEA",url:"https://opensea.io/Fox-Art-Prime"}
     ];

     return (
          <Navbar
               isBordered
               isMenuOpen={isMenuOpen}
               onMenuOpenChange={setIsMenuOpen}
               className="backdrop-blur-2xl bg-[#000000]"
          >
               <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
               </NavbarContent>

               <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand className="flex gap-2">
                         <Avatar src="/logo.svg" alt="logo" width={50} />
                         <p className="font-bold text-inherit text-small text-white">Fox-Art-Prime</p>
                    </NavbarBrand>
               </NavbarContent>

               <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    <NavbarBrand className="flex gap-4">
                         <Avatar src="/logo.svg" alt="logo" width={50} />
                         <p className="font-bold text-inherit text-small text-white">Fox-Art-Prime</p>
                    </NavbarBrand>
                    <NavbarItem>
                         <Link href="#question" aria-current="page" className="text-small uppercase">
                              Questions
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="#" href="#team" className="text-small uppercase">
                              TEAM
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="#" href="https://opensea.io/Fox-Art-Prime" className="text-small uppercase">
                              Opensea
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                         </Link>
                    </NavbarItem>
               </NavbarContent>


               <NavbarMenu>
                    {menuItems.map( ( item, index ) => (
                         <NavbarMenuItem key={`${item}-${index}`} className="gap-4">
                              <Link
                                   className="w-full"
                                   color={
                                        index === 2 ? "secondary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                   }
                                   href={item.url}
                                   size="lg"
                              >
                                   {item.txt}
                              </Link>
                         </NavbarMenuItem>
                    ) )}
               </NavbarMenu>
          </Navbar>
     );
}
