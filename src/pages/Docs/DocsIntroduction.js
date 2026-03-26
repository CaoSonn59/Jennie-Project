import React from "react";
import Typography from "../../components/Typography/Typography";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Stack from "../../components/Stack/Stack";
import Grid from "../../components/Grid/Grid";
import CodeBlock from "../../components/Codeblock/Codeblock";
import styles from "./docs.module.scss";

// References: ChatGPT, Cursor
const DocsIntroduction = () => {
  const installationCode = `npm install @kristinet/ui

// or

yarn add @kristinet/ui`;

  const importCode = `import { Typography, Card, Button, Stack, Grid, AppBar } from '@kristinet/ui';`;

  const basicExampleCode = `import React from 'react';
import { Typography, Card, Button } from '@kristinet/ui';

function App() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <Card>
        <Typography variant="h3">Card Title</Typography>
        <Typography>This is a card component</Typography>
        <Button variant="contained">Click me</Button>
      </Card>
    </div>
  );
}

export default App;`;

  const cardExampleCode = `import { Card, Typography } from '@kristinet/ui';

<Card variant="standard">
  <Typography variant="h3">Card Title</Typography>
  <Typography variant="body1">
    This is the card content
  </Typography>
</Card>`;

  const typographyExampleCode = `import { Typography } from '@kristinet/ui';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="body1">
  This is body text with variant body1
</Typography>
<Typography variant="button">BUTTON TEXT</Typography>`;

  const buttonExampleCode = `import { Button } from '@kristinet/ui';

<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>`;

  const stackExampleCode = `import { Stack } from '@kristinet/ui';

<Stack direction="row" spacing={2}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Stack>`;

  const gridExampleCode = `import { Grid } from '@kristinet/ui';

<Grid container spacing={2}>
  <Grid item size={6}>
    <Card>Item 1</Card>
  </Grid>
  <Grid item size={6}>
    <Card>Item 2</Card>
  </Grid>
</Grid>`;

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Introduction</h1>
        <p className={styles.description}>
          Welcome to KristineT Component Library - A modern React component library for building beautiful user interfaces.
        </p>
      </div>

      {/* Getting Started */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Getting Started
        </Typography>
        <p className={styles.sectionDescription}>
          KristineT UI is a collection of reusable React components that follow Material Design principles. 
          Get started by installing the package and importing the components you need.
        </p>
      </section>

      {/* Installation */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Installation
        </Typography>
        <p className={styles.sectionDescription}>
          Install the package using npm or yarn:
        </p>

        <CodeBlock snippet={installationCode} language="bash" />
      </section>

      {/* Import */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Import Components
        </Typography>
        <p className={styles.sectionDescription}>
          Import the components you need from the library:
        </p>

        <CodeBlock snippet={importCode} language="javascript" />
      </section>

      {/* Basic Example */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Basic Example
        </Typography>
        <p className={styles.sectionDescription}>
          Here's a simple example showing how to use multiple components together:
        </p>

        <div className={styles.example}>
          <Card>
            <Typography variant="h3">Card Title</Typography>
            <Typography variant="body1" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
              This is a card component with a button
            </Typography>
            <Button variant="contained">Click me</Button>
          </Card>
        </div>

        <CodeBlock snippet={basicExampleCode} language="jsx" />
      </section>

      {/* Components Overview */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Available Components
        </Typography>
        <p className={styles.sectionDescription}>
          Explore the available components in the library:
        </p>

        {/* Card Component */}
        <div className={styles.subsection}>
          <Typography variant="h4" className={styles.subsectionTitle}>
            Card
          </Typography>
          <p className={styles.sectionDescription}>
            Flexible card component with multiple variants for displaying content.
          </p>

          <div className={styles.example}>
            <Card>
              <Typography variant="h3">Card Title</Typography>
              <Typography variant="body1">
                This is the card content with standard variant.
              </Typography>
            </Card>
          </div>

          <CodeBlock snippet={cardExampleCode} language="jsx" />
        </div>

        {/* Typography Component */}
        <div className={styles.subsection}>
          <Typography variant="h4" className={styles.subsectionTitle}>
            Typography
          </Typography>
          <p className={styles.sectionDescription}>
            Text styling component with Material Design typography variants.
          </p>

          <div className={styles.example}>
            <Stack spacing={1}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="body1">Body text with variant body1</Typography>
              <Typography variant="button">BUTTON TEXT</Typography>
            </Stack>
          </div>

          <CodeBlock snippet={typographyExampleCode} language="jsx" />
        </div>

        {/* Button Component */}
        <div className={styles.subsection}>
          <Typography variant="h4" className={styles.subsectionTitle}>
            Button
          </Typography>
          <p className={styles.sectionDescription}>
            Button component with multiple variants and sizes for user interactions.
          </p>

          <div className={styles.example}>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack>
          </div>

          <CodeBlock snippet={buttonExampleCode} language="jsx" />
        </div>

        {/* Stack Component */}
        <div className={styles.subsection}>
          <Typography variant="h4" className={styles.subsectionTitle}>
            Stack
          </Typography>
          <p className={styles.sectionDescription}>
            Container component for arranging elements vertically or horizontally with spacing.
          </p>

          <div className={styles.example}>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </Stack>
          </div>

          <CodeBlock snippet={stackExampleCode} language="jsx" />
        </div>

        {/* Grid Component */}
        <div className={styles.subsection}>
          <Typography variant="h4" className={styles.subsectionTitle}>
            Grid
          </Typography>
          <p className={styles.sectionDescription}>
            Responsive grid layout system for creating flexible layouts.
          </p>

          <div className={styles.example}>
            <Grid container spacing={2}>
              <Grid item size={6}>
                <Card>
                  <Typography variant="h6">Item 1</Typography>
                </Card>
              </Grid>
              <Grid item size={6}>
                <Card>
                  <Typography variant="h6">Item 2</Typography>
                </Card>
              </Grid>
            </Grid>
          </div>

          <CodeBlock snippet={gridExampleCode} language="jsx" />
        </div>
      </section>
    </div>
  );
};

export default DocsIntroduction;

