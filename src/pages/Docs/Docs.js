import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ComponentNav from '../../components/ComponentNav/ComponentNav';
import styles from "./docs.module.scss";
import appStyles from '../../App.module.scss';

// References: ChatGPT & Cursor
const Docs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Hamburger Button */}
      <button
        className={appStyles.hamburgerButton}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <div
          className={`${appStyles.hamburgerIcon} ${
            isSidebarOpen ? "hamburger-icon-open" : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`${appStyles.overlay} ${isSidebarOpen ? "overlay-active" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <ComponentNav
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className={styles.docs}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Docs;

