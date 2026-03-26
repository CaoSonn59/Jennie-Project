import React, { useState } from 'react';
import { Menu, X, Search, Bell, Mail, User } from 'lucide-react';
import styles from './appbar.module.scss';

// Using ChatGPT & Cursor to debug and improve the code 
const AppBar = ({
  title = 'MUI',
  logo,
  position = 'fixed',
  color = 'default',
  variant = 'standard',
  menuItems = [],
  leftMenuItems = [],
  rightMenuItems = [],
  centerLogo = false,
  showSearch = false,
  showSearchPrimary = false,
  searchPlaceholder = 'Search...',
  onMenuClick,
  onSearchChange,
  rightActions = [],
  showUserProfile = false,
  userAvatar,
  userLabel,
  onUserClick,
  className = '',
  ...props
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(!drawerOpen);
    if (onMenuClick) {
      onMenuClick(!drawerOpen);
    }
  };

  const handleSearchChange = (e) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  // Build class names 
  const positionClasses = {
    fixed: styles.positionFixed,
    absolute: styles.positionAbsolute,
    relative: styles.positionRelative,
    sticky: styles.positionSticky
  };
  
  const colorClasses = {
    default: styles.colorDefault,
    primary: styles.colorPrimary,
    secondary: styles.colorSecondary,
    transparent: styles.colorTransparent
  };
  
  const variantClasses = {
    standard: styles.variantStandard,
    dense: styles.variantDense,
    prominent: styles.variantProminent
  };
  
  const appBarClasses = [
    styles.appBar,
    positionClasses[position] || '',
    colorClasses[color] || '',
    variantClasses[variant] || '',
    centerLogo ? styles.centerLogoAppBar : '',
    className
  ].filter(Boolean).join(' ');

  // Determine which menu items to use
  const leftItems = centerLogo ? leftMenuItems : [];
  const rightItems = centerLogo ? rightMenuItems : menuItems;
  const allMenuItems = centerLogo ? [...leftMenuItems, ...rightMenuItems] : menuItems;

  return (
    <>
      <header className={appBarClasses} {...props}>
        <div className={`${styles.container} ${centerLogo ? styles.centerLogoLayout : ''}`}>
          {centerLogo ? (
            <>
              {/* Center Logo Layout: Left Menu | Center Logo | Right Menu */}
              
              {/* Left Menu Items */}
              <nav className={styles.leftMenuItems}>
                {leftItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || '#'}
                    className={styles.navLink}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Center Logo */}
              <div className={styles.centerLogoSection}>
                {/* Mobile: Hamburger + Logo in same div */}
                <div className={styles.mobileLogoContainer}>
                  <button
                    className={styles.mobileMenuButton}
                    onClick={handleMenuClick}
                    aria-label="Toggle menu"
                  >
                    <Menu size={24} />
                  </button>
                  {logo ? (
                    <div className={styles.logo}>{logo}</div>
                  ) : (
                    <span className={styles.title}>{title}</span>
                  )}
                </div>
                {/* Desktop: Logo only */}
                <div className={styles.desktopLogoContainer}>
                  {logo ? (
                    <div className={styles.logo}>{logo}</div>
                  ) : (
                    <span className={styles.title}>{title}</span>
                  )}
                </div>
              </div>

              {/* Right Menu Items */}
              <nav className={styles.rightMenuItems}>
                {rightItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || '#'}
                    className={styles.navLink}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </>
          ) : (
            <>
              {/* Standard Layout: Menu Button + Title/Logo | Center Nav | Right Actions */}
              
              {/* Left side: Menu icon and Title/Logo */}
              <div className={styles.leftSection}>
                <button
                  className={styles.menuButton}
                  onClick={handleMenuClick}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
                
                {logo ? (
                  <div className={styles.logo}>{logo}</div>
                ) : (
                  <span className={styles.title}>{title}</span>
                )}
              </div>

              {/* Center: Navigation links (desktop) or Primary Search */}
              {showSearch && showSearchPrimary ? (
                <div className={`${styles.searchContainer} ${styles.primary}`}>
                  <Search className={styles.searchIcon} size={20} />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className={styles.searchInput}
                    onChange={handleSearchChange}
                  />
                </div>
              ) : menuItems.length > 0 ? (
                <nav className={styles.navLinks}>
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href || '#'}
                      className={styles.navLink}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              ) : null}

              {/* Right side: Search (non-primary), Actions, User Profile */}
              <div className={styles.rightSection}>
            {/* Search field (non-primary) */}
            {showSearch && !showSearchPrimary && (
              <div className={styles.searchContainer}>
                <Search className={styles.searchIcon} size={20} />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className={styles.searchInput}
                  onChange={handleSearchChange}
                />
              </div>
            )}

            {/* Right actions */}
            {rightActions.map((action, index) => (
              <button
                key={index}
                className={styles.actionButton}
                onClick={action.onClick}
                aria-label={action.label || `Action ${index + 1}`}
              >
                {action.icon}
                {action.badge && (
                  <span className={styles.badge}>{action.badge}</span>
                )}
              </button>
            ))}

            {/* User profile */}
            {showUserProfile && (
              <button
                className={styles.userButton}
                onClick={onUserClick}
                aria-label="User menu"
              >
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt={userLabel || 'User'}
                    className={styles.userAvatar}
                  />
                ) : (
                  <User className={styles.userIcon} size={24} />
                )}
              </button>
            )}
              </div>
            </>
          )}
        </div>
      </header>

      {/* Drawer menu for mobile */}
      {drawerOpen && (
        <>
          <div
            className={styles.drawerBackdrop}
            onClick={() => setDrawerOpen(false)}
          />
          <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>{title}</span>
              <button
                className={styles.drawerClose}
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className={styles.drawerMenu}>
              {allMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href || '#'}
                  className={styles.drawerMenuItem}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e);
                    setDrawerOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default AppBar;

