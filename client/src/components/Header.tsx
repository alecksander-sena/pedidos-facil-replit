import React from "react";
import logo from "@/assets/icon-512.png";

type Props = {
  establishmentName: string;
  isAdmin: boolean;
  onLoginClick?: () => void;
};

export default function Header({ establishmentName, isAdmin, onLoginClick }: Props) {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white shadow flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border border-primary shadow" />
      </div>
      <div className="flex-1 text-center font-bold text-xl text-primary tracking-wide select-none">
        {establishmentName}
      </div>
      {isAdmin ? (
        <button
          className="rounded-full bg-primary text-white px-3 py-1 font-semibold hover:bg-primary/90 transition"
          onClick={onLoginClick}
        >
          Editar
        </button>
      ) : (
        <div className="w-16" />  
      )}
    </header>
  );
}