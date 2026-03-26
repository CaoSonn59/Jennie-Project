import React, { useState } from 'react';
import styles from "./docs.module.scss";
import AppBar from "../../components/AppBar/AppBar";
import Typography from "../../components/Typography/Typography";
import Codeblock from "../../components/Codeblock/Codeblock";
import { Bell, Mail, User, Search } from 'lucide-react';

// References: ChatGPT, Cursor
const DocsAppBar = () => {
  const [basicMenuOpen, setBasicMenuOpen] = useState(false);
  const [menuMenuOpen, setMenuMenuOpen] = useState(false);
  const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [primarySearchMenuOpen, setPrimarySearchMenuOpen] = useState(false);

  const basicCode = `<AppBar 
  title="KristineT"
  onMenuClick={() => console.log('Menu clicked')}
  rightActions={[
    {
      label: 'Login',
      onClick: () => console.log('Login clicked'),
      icon: <button>Login</button>
    }
  ]}
/>`;

  const centerLogoCode = `<AppBar 
  title="KristineT"
  centerLogo={true}
  leftMenuItems={[
    { label: 'MUSIC', href: '#music' },
    { label: 'EVENTS', href: '#events' }
  ]}
  rightMenuItems={[
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FASHION', href: '#fashion' }
  ]}
  onMenuClick={() => console.log('Menu clicked')}
/>`;

  const responsiveCode = `<AppBar 
  title="KristineT"
  menuItems={[
    { label: 'PROJECTS', href: '#projects' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'BLOG', href: '#blog' }
  ]}
  showUserProfile={true}
  userAvatar="https://example.com/avatar.jpg"
/>`;

  const searchCode = `<AppBar 
  title="KristineT"
  showSearch={true}
  searchPlaceholder="Search..."
  onMenuClick={() => console.log('Menu clicked')}
/>`;

  const primarySearchCode = `<AppBar 
  title=""
  showSearch={true}
  showSearchPrimary={true}
  searchPlaceholder="Search..."
  rightActions={[
    {
      label: 'Notifications',
      onClick: () => console.log('Notifications'),
      icon: <Bell size={20} />,
      badge: 2
    },
    {
      label: 'Mail',
      onClick: () => console.log('Mail'),
      icon: <Mail size={20} />,
      badge: 4
    }
  ]}
  showUserProfile={true}
  onMenuClick={() => console.log('Menu clicked')}
/>`;


  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>App Bar</h1>
        <p className={styles.description}>
          The App Bar displays information and actions relating to the current screen.
        </p>
      </div>

      {/* Center Logo */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>Center Logo</Typography>
        <p className={styles.sectionDescription}>
          An app bar with logo centered and menu items distributed on both sides.
        </p>
        
        <div className={styles.example} style={{ position: 'relative', paddingTop: '64px' }}>
          <AppBar 
            title="KristineT"
            position="relative"
            centerLogo={true}
            leftMenuItems={[
              { label: 'MUSIC', href: '#music' },
              { label: 'EVENTS', href: '#events' }
            ]}
            rightMenuItems={[
              { label: 'GALLERY', href: '#gallery' },
              { label: 'FASHION', href: '#fashion' }
            ]}
            onMenuClick={() => console.log('Menu clicked')}
          />
        </div>
        
        <Codeblock snippet={centerLogoCode} language="jsx" />
      </section>

        {/* Basic App bar */}
        <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>Basic App bar</Typography>
        <p className={styles.sectionDescription}>
          A simple app bar with a hamburger menu icon and a primary action button.
        </p>
        
        <div className={styles.example} style={{ position: 'relative', paddingTop: '64px' }}>
          <AppBar 
            title="KristineT"
            position="relative"
            onMenuClick={() => setBasicMenuOpen(!basicMenuOpen)}
            rightActions={[
              {
                label: 'Login',
                onClick: () => console.log('Login clicked'),
                icon: <span style={{
                  padding: '6px 16px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Login</span>
              }
            ]}
          />
        </div>
        
        <Codeblock snippet={basicCode} language="jsx" />
      </section>

  
      {/* App bar with responsive menu */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>App bar with responsive menu</Typography>
        <p className={styles.sectionDescription}>
          An app bar with navigation links that collapse into a drawer menu on smaller screens.
        </p>
        
        <div className={styles.example} style={{ position: 'relative', paddingTop: '64px' }}>
          <AppBar 
            title="KristineT"
            position="relative"
            menuItems={[
              { label: 'PROJECTS', href: '#projects' },
              { label: 'PRICING', href: '#pricing' },
              { label: 'BLOG', href: '#blog' }
            ]}
            showUserProfile={true}
            userAvatar="https://mui.com/static/images/avatar/1.jpg"
            onMenuClick={() => setResponsiveMenuOpen(!responsiveMenuOpen)}
          />
        </div>
        
        <Codeblock snippet={responsiveCode} language="jsx" />
      </section>

      {/* App bar with search field */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>App bar with search field</Typography>
        <p className={styles.sectionDescription}>
          An app bar with an integrated search field.
        </p>
        
        <div className={styles.example} style={{ position: 'relative', paddingTop: '64px' }}>
          <AppBar 
            title="KristineT"
            position="relative"
            showSearch={true}
            searchPlaceholder="Search..."
            onMenuClick={() => setSearchMenuOpen(!searchMenuOpen)}
          />
        </div>
        
        <Codeblock snippet={searchCode} language="jsx" />
      </section>

      {/* App bar with a primary search field */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>App bar with a primary search field</Typography>
        <p className={styles.sectionDescription}>
          An app bar with a prominent search field in the center and multiple action buttons.
        </p>
        
        <div className={styles.example} style={{ position: 'relative', paddingTop: '64px' }}>
            <AppBar 
            title=""
            position="relative"
            showSearch={true}
            showSearchPrimary={true}
            searchPlaceholder="Search..."
            onMenuClick={() => setPrimarySearchMenuOpen(!primarySearchMenuOpen)}
            rightActions={[
              {
                label: 'Notifications',
                onClick: () => console.log('Notifications'),
                icon: <Bell size={20} />,
                badge: 2
              },
              {
                label: 'Mail',
                onClick: () => console.log('Mail'),
                icon: <Mail size={20} />,
                badge: 4
              }
            ]}
            showUserProfile={true}
          />
        </div>
        
        <Codeblock snippet={primarySearchCode} language="jsx" />
      </section>

      
      
    </>
  );
};

export default DocsAppBar;

