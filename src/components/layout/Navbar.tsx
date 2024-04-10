import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "@/hooks/auth/useAuth";

import { MaxWidthProvider } from "./MaxWidthProvider";
import { NoUserAvatar, UserAvatar } from "../Avatar";
import { BrandLogo } from "../BrandLogo/BrandLogo";
import { LinksDropdown } from "../LinksDropdown";
import Cloud from "../utils/Cloud";
import { Info } from "../utils/Info";
import { Settings } from "../utils/Settings";

export function Navbar() {
  const { loggedIn } = useAuth();
  const links = [
    {
      id: 1,
      icon: <Info />,
      text: "About us",
      href: "/about",
      highlight: false,
    },
    {
      id: 2,
      icon: <Settings />,
      text: "Settings",
      href: "/settings",
      highlight: false,
    },
    {
      id: 3,
      icon: <Cloud />,
      text: "Sync to cloud",
      href: "/login",
      highlight: true,
    },
  ];
  return (
    <div className="h-[4rem]">
      <MaxWidthProvider className="h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <BrandLogo />
        </Link>
        <div className="md:hidden">
          <LinksDropdown>
            {loggedIn ? <UserAvatar withName /> : <NoUserAvatar />}
          </LinksDropdown>
        </div>
        <div className="hidden md:flex md:items-center md:gap-[0.938rem]">
          {links.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.id}
                className={`flex items-center gap-[0.313rem] border rounded-full px-[0.625rem] h-[1.75rem] ${
                  item.highlight
                    ? "border-[#2283CE] bg-[#065390]"
                    : "border-[#414141]"
                }`}
              >
                <span>{item.icon}</span>
                <span
                  className={`text-[0.75rem] font-[500] ${
                    item.highlight ? "text-white" : "text-[#C5C5C5]"
                  }`}
                >
                  {item.text}
                </span>
              </Link>
            );
          })}
        </div>
      </MaxWidthProvider>
    </div>
  );
}
