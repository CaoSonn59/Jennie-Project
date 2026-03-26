import React from "react";
import { NavLink } from "react-router-dom";
import { Search, Settings, Bell } from "lucide-react";
import styles from "./componentNav.module.scss";

// References: ChatGPT & Cursor
// Components list
const componentsList = [
  "Card",
  "Typography",
  "AppBar",
  "Stack",
  "Grid",
  "Button",
];

export default function ComponentNav({ isOpen, onClose, mode = "docked" }) {
  const sidebarClassName = [
    styles.sidebar,
    isOpen ? styles.sidebarOpen : "",
    mode === "floating" ? styles.sidebarFloating : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleItemClick = () => {
    // Close sidebar on mobile when item is clicked
    if (window.innerWidth <= 768 && onClose) {
      onClose();
    }
  };

  return (
    <aside className={sidebarClassName}>
      <div className={`${styles.logoHeader} p-6 border-b border-gray-200`}>
        <NavLink
          to="/docs/introduction"
          onClick={handleItemClick}
          className="text-2xl font-bold text-purple-600 hover:opacity-90 focus:outline-none"
          aria-label="Go to Introduction"
        >
          KristineT
        </NavLink>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        {/* --- HOME --- */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-purple-600 mb-2">HOME</h3>
          <ul className="space-y-1">
            {/* Link Introduction */}
            <li>
              <NavLink
                to="/docs/introduction"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  `w-full text-left px-4 py-2 rounded-lg text-sm transition-colors block ${
                    isActive
                      ? "bg-purple-100 text-purple-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                Introduction
              </NavLink>
            </li>
          </ul>
        </div>

        {/* --- ASSESSMENT 3 - JENNIE ARTIST --- */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-purple-600 mb-2">
            ASSESSMENT 3
          </h3>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/assessment3/jennie-homepage"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  `w-full text-left px-4 py-2 rounded-lg text-sm transition-colors block ${
                    isActive
                      ? "bg-purple-100 text-purple-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                JENNIE KIM
              </NavLink>
            </li>
          </ul>
        </div>

        {/* --- COMPONENT --- */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-purple-600 mb-2">COMPONENT</h3>
          <ul className="space-y-1">
            {componentsList.map((comp) => {
              const path = `/docs/${comp.toLowerCase()}`;
              return (
                <li key={comp}>
                  <NavLink
                    to={path}
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      `w-full text-left px-4 py-2 rounded-lg text-sm transition-colors block ${
                        isActive
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {comp}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="border-t border-gray-200 p-4 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5 text-purple-600" />
          SETTINGS
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5 text-purple-600" />
          NOTIFICATIONS
        </button>
      </div>

      <div className="p-4 text-xs text-purple-300 text-center">
        Copyright @CaoSon 2025
      </div>
    </aside>
  );
}
