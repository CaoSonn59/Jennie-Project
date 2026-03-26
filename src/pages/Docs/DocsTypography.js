import React from 'react';
import styles from "./docs.module.scss";
import Typography from "/src/components/Typography/Typography.js";
import Codeblock from "/src/components/Codeblock/Codeblock.js";

// References: ChatGPT, Cursor
const DocsTypography = () => {
  const fontsourceInstallCode = `npm install @fontsource/roboto`;
  
  const fontsourceImportCode = `import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';`;
  
  const googleFontsCode = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>`;
  
  const componentUsageCode = `<Typography variant="h1">h1. Heading</Typography>
<Typography variant="h2">h2. Heading</Typography>
<Typography variant="h3">h3. Heading</Typography>
<Typography variant="h4">h4. Heading</Typography>
<Typography variant="h5">h5. Heading</Typography>
<Typography variant="h6">h6. Heading</Typography>
<Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet</Typography>
<Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet</Typography>
<Typography variant="body1">body1. Lorem ipsum dolor sit amet</Typography>
<Typography variant="body2">body2. Lorem ipsum dolor sit amet</Typography>
<Typography variant="button">BUTTON TEXT</Typography>
<Typography variant="caption">caption text</Typography>
<Typography variant="overline">OVERLINE TEXT</Typography>`;
  

  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <Typography variant="h1" className={styles.title}>Typography</Typography>
        <Typography variant="body1" className={styles.description}>
          Use typography to present your design and content as clearly and efficiently as possible.
        </Typography>
      </div>

      {/* Roboto Font Section */}
      <section className={styles.section}>
        <Typography variant="h2" className={styles.sectionTitle}>Roboto font</Typography>
        <Typography variant="body1" className={styles.sectionDescription}>
          KristineT uses the Roboto font by default. Add it to your project via Fontsource, or with the Google Fonts CDN.
        </Typography>

        <div className={styles.subsection}>
          <Typography variant="h3" className={styles.subsectionTitle}>Fontsource Installation</Typography>
          <Typography variant="body1" className={styles.sectionDescription}>
            Fontsource can be configured to load specific subsets, weights, and styles. Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.
          </Typography>
          <Codeblock snippet={fontsourceInstallCode} language="bash" />
          <Typography variant="body2" className={styles.codeLabel}>Install via npm</Typography>
          <Codeblock snippet={fontsourceImportCode} language="javascript" />
          <Typography variant="body2" className={styles.codeLabel}>Import in your entry point</Typography>
        </div>

        <div className={styles.subsection}>
          <Typography variant="h3" className={styles.subsectionTitle}>Google Web Fonts</Typography>
          <Typography variant="body1" className={styles.sectionDescription}>
            To install Roboto through the Google Web Fonts CDN, add the following code inside your project's <code>&lt;head /&gt;</code> tag:
          </Typography>
          <Codeblock snippet={googleFontsCode} language="html" />
        </div>
      </section>

      {/* Component Usage Section */}
      <section className={styles.section}>
        <Typography variant="h2" className={styles.sectionTitle}>Component</Typography>
        <Typography variant="h3" className={styles.subsectionTitle}>Usage</Typography>
        <Typography variant="body1" className={styles.sectionDescription}>
          The Typography component follows the Material Design typographic scale that provides a limited set of type sizes that work well together for a consistent layout.
        </Typography>
        
        <div className={styles.example}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
          <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Typography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          <Typography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          <Typography variant="button">BUTTON TEXT</Typography>
          <Typography variant="caption">caption text</Typography>
          <Typography variant="overline">OVERLINE TEXT</Typography>
        </div>
        
        <Codeblock snippet={componentUsageCode} language="jsx" />
      </section>

    </>
  );
};

export default DocsTypography;
