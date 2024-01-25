import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

const NavbarResponsive = () => {
  const menuItems = [
    "Home",
    "Events",
    "About Us",
  ];

  return (
    <Navbar className="lg:py-4 bg-inherit" maxWidth={"2xl"}>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <div className="flex flex-row items-center justify-center">
            <p className="text-[24px] font-medium leading-normal text-primary">
              Ease
            </p>
            <span className="text-secondary text-[24px] font-medium leading-normal">
              Sign
            </span>
            <p className="text-center ml-[8px] mr-[6px] text-[12px] font-normal leading-normal">by</p>
            <img src="/navbar/spark-logo.svg" alt="SPARKLAB Logo" className="w-[50px] h-[50px] object-contain" />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <div className="flex flex-row items-center">
            <p className="text-[32px] font-medium leading-normal text-primary">
              Ease
            </p>
            <span className="text-secondary text-[32px] font-medium leading-normal">
              Sign
            </span>
            <p className="text-center ml-[12px] mr-[10px] text-[16px] font-normal leading-normal">by</p>
            <img src="/navbar/spark-logo.svg" alt="SPARKLAB Logo" className="w-[50px] h-[50px] object-contain" />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-x-8">
        <NavbarItem className="hidden lg:flex" isActive>
          <Link href="/#" aria-current="page" className="lg:text-[18px] font-medium leading-normal">Home</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="lg:text-[18px] font-medium leading-normal">Events</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="lg:text-[18px] font-medium leading-normal">About Us</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-inherit">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarResponsive;
