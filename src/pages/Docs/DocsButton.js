import React from "react";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import Stack from "../../components/Stack/Stack";
import CodeBlock from "../../components/Codeblock/Codeblock";
import styles from "./docs.module.scss";

// References: ChatGPT, Cursor
const DocsButton = () => {
  const basicCode = `<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>`;

  const textButtonCode = `<Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>`;

  const containedButtonCode = `<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" href="#contained-buttons">Link</Button>`;

  const outlinedButtonCode = `<Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="outlined" href="#outlined-buttons">Link</Button>`;

  const handlingClicksCode = `<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>`;

  const colorCode = `<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="outlined" color="error">Error</Button>`;

  const sizesCode = `<div>
  <Button size="small" variant="text">Small</Button>
  <Button size="medium" variant="text">Medium</Button>
  <Button size="large" variant="text">Large</Button>
</div>
<div>
  <Button size="small" variant="outlined">Small</Button>
  <Button size="medium" variant="outlined">Medium</Button>
  <Button size="large" variant="outlined">Large</Button>
</div>
<div>
  <Button size="small" variant="contained">Small</Button>
  <Button size="medium" variant="contained">Medium</Button>
  <Button size="large" variant="contained">Large</Button>
</div>`;

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Button</h1>
        <p className={styles.description}>
          Buttons allow users to take actions and make choices, with a single tap.
        </p>
      </div>

      {/* Basic button */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Basic button
        </Typography>
        <p className={styles.sectionDescription}>
          The Button comes with three variants: text (default), contained and outlined.
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </div>

        <CodeBlock snippet={basicCode} language="jsx" />
      </section>

      {/* Text button */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Text button
        </Typography>
        <p className={styles.sectionDescription}>
          Text buttons are typically used for less-pronounced actions, including those located in dialogs and cards.
          In cards, text buttons help maintain an emphasis on card content.
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
          </Stack>
        </div>

        <CodeBlock snippet={textButtonCode} language="jsx" />
      </section>

      {/* Contained button */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Contained button
        </Typography>
        <p className={styles.sectionDescription}>
          Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions
          that are primary to your app.
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
              Link
            </Button>
          </Stack>
        </div>

        <CodeBlock snippet={containedButtonCode} language="jsx" />

      </section>

      {/* Outlined button */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Outlined button
        </Typography>
        <p className={styles.sectionDescription}>
          Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary
          action in an app.
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Link
            </Button>
          </Stack>
        </div>

        <CodeBlock snippet={outlinedButtonCode} language="jsx" />
      </section>

      {/* Handling clicks */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Handling clicks
        </Typography>
        <p className={styles.sectionDescription}>
          All components accept an <code>onClick</code> handler that is applied to the root DOM element.
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} justifyContent="center" useFlexGap={true}>
            <Button
              onClick={() => {
                alert("clicked");
              }}
            >
              Click me
            </Button>
          </Stack>
        </div>

        <CodeBlock snippet={handlingClicksCode} language="jsx" />
      </section>

      {/* Color */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Color
        </Typography>
        <p className={styles.sectionDescription}>
          Use the <code>color</code> prop to apply theme color palette to the button.
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" useFlexGap={true}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
          </Stack>
        </div>

        <CodeBlock snippet={colorCode} language="jsx" />
      </section>

      {/* Sizes */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Sizes
        </Typography>
        <p className={styles.sectionDescription}>
          For larger or smaller buttons, use the <code>size</code> prop.
        </p>

        <div className={styles.example}>
          <Stack spacing={3} useFlexGap={true}>
            <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" useFlexGap={true}>
              <Button size="small" variant="text">
                Small
              </Button>
              <Button size="medium" variant="text">
                Medium
              </Button>
              <Button size="large" variant="text">
                Large
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" useFlexGap={true}>
              <Button size="small" variant="outlined">
                Small
              </Button>
              <Button size="medium" variant="outlined">
                Medium
              </Button>
              <Button size="large" variant="outlined">
                Large
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" useFlexGap={true}>
              <Button size="small" variant="contained">
                Small
              </Button>
              <Button size="medium" variant="contained">
                Medium
              </Button>
              <Button size="large" variant="contained">
                Large
              </Button>
            </Stack>
          </Stack>
        </div>

        <CodeBlock snippet={sizesCode} language="jsx" />
      </section>


    </div>
  );
};

export default DocsButton;

