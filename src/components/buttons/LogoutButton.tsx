"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    router.push("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-2 py-2 w-full flex justify-start bg-red-600 text-sm font-medium text-white rounded hover:bg-red-500 transition duration-200"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
