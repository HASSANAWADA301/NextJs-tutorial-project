import React from "react";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <li className="cursor-pointer py-2 px-3 text-[#868585]">
    <a href={href}>{label}</a>
  </li>
);
