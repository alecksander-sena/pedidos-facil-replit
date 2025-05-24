import React from "react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  storeName: string;
}

export default function Header({ storeName }: HeaderProps) {
  return (
    <header className="w-full bg-white shadow py-3 px-4 flex items-center justify-center fixed top-0 left-0 z-10">
      <img src={logo} alt="Logo" className="h-8 mr-2" />
      <span className="font-bold text-xl text-primary">{storeName}</span>
    </header>
  );
}