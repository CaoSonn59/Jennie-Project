import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { Menu } from "lucide-react";
import ComponentNav from "../../components/ComponentNav/ComponentNav";
import styles from "./jennieHomepage.module.scss";
import appStyles from "../../App.module.scss";

/* Layout component for Assessment 3 - JENNIE ARTIST

The idea here is when you click to "Jennie Kim" under the page of the Assessment 3,
it will directly route to JennieHompage, but because there's no way to go back to the components/introduction,
then I created a menu trigger - "floatingmenubutton" - in the bottom left corner of the homepage,
so that when we click to it, the side bar open and we can choose whatever we want

*/

const Assessment3 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const mainContentRef = useRef(null);
  const isJenniePage = location.pathname.includes(
    "/assessment3/jennie-homepage"
  );

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
      {/* Menu trigger */}
      {isJenniePage ? (
        <button
          className={styles.floatingMenuButton}
          onClick={toggleSidebar}
          aria-label="Toggle components menu"
        >
          <Menu size={18} className={styles.floatingMenuIcon} />
          <span>Components</span>
        </button>
      ) : (
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
      )}

      {/* Overlay */}
      {isJenniePage ? (
        <div
          className={`${styles.floatingOverlay} ${
            isSidebarOpen ? styles.floatingOverlayActive : ""
          }`}
          onClick={closeSidebar}
        />
      ) : (
        <div
          className={`${appStyles.overlay} ${
            isSidebarOpen ? "overlay-active" : ""
          }`}
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <ComponentNav
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        mode={isJenniePage ? "floating" : "docked"}
      />

      {/* Main Content */}
      <main ref={mainContentRef} className="flex-1 overflow-y-auto">
        <Outlet context={{ scrollContainer: mainContentRef }} />
      </main>
    </div>
  );
};

export default Assessment3;
