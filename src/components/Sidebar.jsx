"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-6 mr-2 left-4 z-50 text-gray-600 hover:text-blue-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <aside
        className={`h-[160vh] w-60 shadow-lg bg-white p-4 border-r border-gray-300 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:block fixed md:relative top-0 left-0 z-40`}
      >
        <nav>
          <ul>
            <li className="mb-6 mt-6 sm:mt-0">
              <Link
                href="/dashboard"
                className={`block text-lg font-semibold py-2 px-4  transition-all duration-300 ${
                  pathname === "/dashboard"
                    ? "text-blue-500 bg-gray-200 rounded-r-full"
                    : "text-gray-800 hover:text-white hover:bg-blue-500 rounded-r-full"
                }`}
              >
                📊 Dashboard
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/skilltest"
                className={`block text-lg font-semibold py-2 px-4  transition-all duration-300 ${
                  pathname === "/skilltest"
                    ? "text-blue-500 bg-gray-200 rounded-r-full"
                    : "text-gray-800 hover:text-white hover:bg-blue-500 rounded-r-full"
                }`}
              >
                🎖 Skill Test
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/internship"
                className={`block text-lg font-semibold py-2 px-4  transition-all duration-300 ${
                  pathname === "/internship"
                    ? "text-blue-500 bg-gray-200 rounded-r-full"
                    : "text-gray-800 hover:text-white hover:bg-blue-500 rounded-r-full "
                }`}
              >
                📄 Internship
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
