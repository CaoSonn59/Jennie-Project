import React, { useState } from "react";
import Stack from "../../components/Stack/Stack";
import Typography from "../../components/Typography/Typography";
import CodeBlock from "../../components/Codeblock/Codeblock";
import styles from "./docs.module.scss";

// References: ChatGPT, Cursor
const DocsStack = () => {
  const [direction, setDirection] = useState("row");
  const [alignItems, setAlignItems] = useState("center");
  const [justifyContent, setJustifyContent] = useState("center");
  const [spacing, setSpacing] = useState(2);

  // Item component for examples
  const Item = ({ children, ...props }) => (
    <div
      style={{
        padding: "8px 16px",
        background: "#d3d3d3",
        borderRadius: 4,
        textAlign: "center",
        minWidth: 60,
        ...props.style,
      }}
    >
      {children}
    </div>
  );

  const basicCode = `<Stack spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>`;

  const directionCode = `<Stack direction="row" spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>`;

  const dividersCode = `<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>`;

  const responsiveCode = `<Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>`;

  const interactiveCode = `<Stack
  direction="${direction}"
  alignItems="${alignItems}"
  justifyContent="${justifyContent}"
  spacing={${spacing}}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>`;

  // Simple Divider component
  const Divider = ({ orientation = "horizontal", flexItem = false }) => (
    <div
      style={{
        width: orientation === "vertical" ? 1 : "100%",
        height: orientation === "vertical" ? "100%" : 1,
        background: "#e0e0e0",
        flexShrink: 0,
        ...(flexItem && { alignSelf: "stretch" }),
      }}
    />
  );

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Stack</h1>
        <p className={styles.description}>
          Stack is a container component for arranging elements vertically or
          horizontally.
        </p>
      </div>

      {/* Introduction */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Introduction
        </Typography>
        <p className={styles.sectionDescription}>
          The Stack component manages the layout of its immediate children along
          the vertical or horizontal axis, with optional spacing and dividers
          between items.
        </p>
        <div
          style={{
            background: "#d3d3d3",
            padding: 16,
            borderRadius: 8,
            marginTop: 16,
          }}
        >
          <p style={{ margin: 0, fontSize: 14 }}>
            <strong>Stack</strong> is ideal for one-dimensional layouts, while
            Grid is preferable when you need both vertical and horizontal axes
            (gap/grid).
          </p>
        </div>
      </section>

      {/* Basics */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Basics
        </Typography>
        <p className={styles.sectionDescription}>
          Stack is a generic container for arranging elements. The{" "}
          <code>spacing</code> prop controls the space between children. It can
          take a number, decimal, or string.
        </p>

        <div className={styles.example}>
          <Stack spacing={3} useFlexGap={true}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>

        <CodeBlock snippet={basicCode} language="jsx" />
      </section>

      {/* Direction */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Direction
        </Typography>
        <p className={styles.sectionDescription}>
          By default, Stack arranges items vertically (column). Use the{" "}
          <code>direction</code> prop to position items horizontally (row).
        </p>

        <div className={styles.example}>
          <Stack direction="row" spacing={3} useFlexGap={true}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>

        <CodeBlock snippet={directionCode} language="jsx" />
      </section>

      {/* Dividers */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Dividers
        </Typography>
        <p className={styles.sectionDescription}>
          Use the <code>divider</code> prop to insert an element between each
          child. This is commonly used with the <code>Divider</code> component.
        </p>

        <div className={styles.example}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
            useFlexGap={true}
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>

        <CodeBlock snippet={dividersCode} language="jsx" />
      </section>

      {/* Responsive values */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Responsive values
        </Typography>
        <p className={styles.sectionDescription}>
          You can adjust the <code>direction</code> or <code>spacing</code>{" "}
          values based on the active breakpoint.
        </p>

        <div className={styles.example}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3, md: 4 }}
            useFlexGap={true}
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>

        <CodeBlock snippet={responsiveCode} language="jsx" />
      </section>

      {/* Interactive demo */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Interactive demo
        </Typography>
        <p className={styles.sectionDescription}>
          Below is an interactive demo that helps to explore the visual results
          of the UI component.
        </p>

        <div className={styles.example}>
          <Stack
            direction={direction}
            alignItems={alignItems}
            justifyContent={justifyContent}
            spacing={spacing}
            useFlexGap={true}
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div>
            <label
              style={{ display: "block", marginBottom: 8, fontWeight: 500 }}
            >
              direction
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["row", "row-reverse", "column", "column-reverse"].map(
                (value) => (
                  <button
                    key={value}
                    onClick={() => setDirection(value)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 4,
                      border:
                        direction === value
                          ? "2px solid #1976d2"
                          : "1px solid #ccc",
                      background: direction === value ? "#e3f2fd" : "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {value}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label
              style={{ display: "block", marginBottom: 8, fontWeight: 500 }}
            >
              alignItems
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["flex-start", "center", "flex-end", "stretch", "baseline"].map(
                (value) => (
                  <button
                    key={value}
                    onClick={() => setAlignItems(value)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 4,
                      border:
                        alignItems === value
                          ? "2px solid #1976d2"
                          : "1px solid #ccc",
                      background: alignItems === value ? "#e3f2fd" : "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {value}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label
              style={{ display: "block", marginBottom: 8, fontWeight: 500 }}
            >
              justifyContent
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around",
                "space-evenly",
              ].map((value) => (
                <button
                  key={value}
                  onClick={() => setJustifyContent(value)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 4,
                    border:
                      justifyContent === value
                        ? "2px solid #1976d2"
                        : "1px solid #ccc",
                    background: justifyContent === value ? "#e3f2fd" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              style={{ display: "block", marginBottom: 8, fontWeight: 500 }}
            >
              spacing
            </label>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="range"
                min="0"
                max="12"
                step="0.5"
                value={spacing}
                onChange={(e) => setSpacing(Number(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ minWidth: 40, textAlign: "right" }}>
                {spacing}
              </span>
            </div>
          </div>
        </div>

        <CodeBlock snippet={interactiveCode} language="jsx" />
      </section>
    </div>
  );
};

export default DocsStack;
