"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  return (
    <section className="">
      <nav className="bg-white shadow-lg text-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-90">
        <div className="container mx-auto px-6 flex justify-between items-center py-4">
          {/* Logo with New Font */}
          <div className="text-4xl font-bold tracking-wide">
            <Link
              href="/"
              className="text-indigo-600 hover:text-indigo-800 transition duration-300 tracking-tighter font-bold mt-6"
            >
              <span className="bg-gradient-to-r from-[#625da3] to-black text-transparent bg-clip-text">
                FinSafe
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:space-x-6 font-medium items-center">
            <li>
              <Link
                href="/dashboard"
                className="hover:text-indigo-600 hover:shadow-lg hover:scale-105 transition duration-300 p-2 rounded-lg"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-600 hover:shadow-lg hover:scale-105 transition duration-300 p-2 rounded-lg"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/auth/login"
                  className="hover:text-green-600 hover:shadow-lg hover:scale-105 transition duration-300 p-2 rounded-lg"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 font-medium items-center bg-white text-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md py-4">
            <li>
              <Link
                href="/dashboard"
                className="hover:text-indigo-600 hover:shadow-lg hover:scale-105 transition duration-300 p-2 rounded-lg"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-600 hover:shadow-lg hover:scale-105 transition duration-300 p-2 rounded-lg"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/auth/login"
                  className="hover:text-green-600 hover:shadow-lg hover:scale-105 transition duration-300 p-2 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
