import React, { useState } from "react";
import Grid from "../../components/Grid/Grid";
import Typography from "../../components/Typography/Typography";
import CodeBlock from "../../components/Codeblock/Codeblock";
import styles from "./docs.module.scss";

// Reference ChatGPT & Cursor - ask to modify and debug the code
const DocsGrid = () => {
  const [spacing, setSpacing] = useState(2);
  const [direction, setDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");

  // Item component for examples
  const Item = ({ children, size, ...props }) => (
    <Grid item size={size} {...props}>
      <div
        style={{
          padding: "16px",
          background: "rgb(211 211 211)",
          borderRadius: 4,
          textAlign: "center",
          minHeight: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </Grid>
  );

  const basicCode = `<Grid container spacing={2}>
  <Grid item size={8}>
    <Item>size=8</Item>
  </Grid>
  <Grid item size={4}>
    <Item>size=4</Item>
  </Grid>
  <Grid item size={4}>
    <Item>size=4</Item>
  </Grid>
  <Grid item size={8}>
    <Item>size=8</Item>
  </Grid>
</Grid>`;

  const multipleBreakpointsCode = `<Grid container spacing={2}>
  <Grid item size={{ xs: 6, md: 8 }}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid item size={{ xs: 6, md: 4 }}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item size={{ xs: 6, md: 4 }}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item size={{ xs: 6, md: 8 }}>
    <Item>xs=6 md=8</Item>
  </Grid>
</Grid>`;

  const spacingCode = `<Grid container spacing={2}>
  <Grid item size={4}>
    <Item>size=4</Item>
  </Grid>
  <Grid item size={4}>
    <Item>size=4</Item>
  </Grid>
  <Grid item size={4}>
    <Item>size=4</Item>
  </Grid>
</Grid>`;

  const interactiveCode = `<Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
  <Grid item size={4}>
    <Item>Cell 1</Item>
  </Grid>
  <Grid item size={4}>
    <Item>Cell 2</Item>
  </Grid>
  <Grid item size={4}>
    <Item>Cell 3</Item>
  </Grid>
</Grid>`;

  const autoLayoutCode = `<Grid container spacing={2}>
  <Grid item size="grow">
    <Item>size=grow</Item>
  </Grid>
  <Grid item size={8}>
    <Item>size=8</Item>
  </Grid>
  <Grid item size="grow">
    <Item>size=grow</Item>
  </Grid>
</Grid>`;


  const collageCode = `<div style={{ maxWidth: 1200, margin: '0 auto' }}>
  <Grid container spacing={2} alignItems="stretch" justifyContent="space-between" style={{ width: '100%' }}>
    {/* Column 1 - full height */}
    <Grid item size={{ xs: 12, md: 3 }}>
    <div style={{ height: '100%', minHeight: 420 }}>
      <img src="image1.jpg" alt="Full" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: 4 }} />
    </div>
    </Grid>

    {/* Column 2 - split vertically (2/3 + 1/3) */}
    <Grid item size={{ xs: 12, md: 3 }}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 420, gap: 0 }}>
      <div style={{ flex: 2, border: '2px solid white', borderRadius: 4, overflow: 'hidden' }}>
        <img src="image2.jpg" alt="Top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1, border: '2px solid white', borderRadius: 4, overflow: 'hidden' }}>
        <img src="image3.jpg" alt="Bottom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
    </Grid>

    {/* Column 3 - full height */}
    <Grid item size={{ xs: 12, md: 3 }}>
    <div style={{ height: '100%', minHeight: 420 }}>
      <img src="image4.jpg" alt="Full" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: 4 }} />
    </div>
    </Grid>

    {/* Column 4 - split vertically (1/3 + 2/3) */}
    <Grid item size={{ xs: 12, md: 3 }}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 420, gap: 0 }}>
      <div style={{ flex: 1, border: '2px solid white', borderRadius: 4, overflow: 'hidden' }}>
        <img src="image5.jpg" alt="Top small" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 2, border: '2px solid white', borderRadius: 4, overflow: 'hidden' }}>
        <img src="image6.jpg" alt="Bottom large" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
    </Grid>
  </Grid>
</div>`;

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Grid</h1>
        <p className={styles.description}>
          The Grid component uses CSS Flexbox™ for high flexibility. The Grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs.
        </p>
      </div>

      {/* How it works */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          How it works
        </Typography>
        <p className={styles.sectionDescription}>
          The Grid system is implemented with the CSS Flexbox™ library. It contains:
        </p>
        <ul style={{ marginTop: 16, paddingLeft: 24 }}>
          <li style={{ marginBottom: 8 }}>
            <strong>container</strong> and <strong>item</strong> props for defining the grid structure
          </li>
          <li style={{ marginBottom: 8 }}>
            Percentage-based widths for fluid sizing
          </li>
          <li style={{ marginBottom: 8 }}>
            Breakpoints for responsive design (xs, sm, md, lg, xl)
          </li>
          <li style={{ marginBottom: 8 }}>
            Integer values from 1-12 for column span (out of 12)
          </li>
          <li style={{ marginBottom: 8 }}>
            The <code>gap</code> CSS property for spacing between items
          </li>
          <li style={{ marginBottom: 8 }}>
            Limitations: No row spanning, no automatic placement
          </li>
        </ul>
      </section>

      {/* Basic grid */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Basic grid
        </Typography>
        <p className={styles.sectionDescription}>
          The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Column widths are integer values between 1 and 12; they apply at all breakpoints for larger screens.
        </p>

        <div className={styles.example}>
          <Grid container spacing={2}>
            <Item size={8}>size=8</Item>
            <Item size={4}>size=4</Item>
            <Item size={4}>size=4</Item>
            <Item size={8}>size=8</Item>
          </Grid>
        </div>

        <CodeBlock snippet={basicCode} language="jsx" />
      </section>

      {/* Multiple breakpoints */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Multiple breakpoints
        </Typography>
        <p className={styles.sectionDescription}>
          Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.
        </p>

        <div className={styles.example}>
          <Grid container spacing={2}>
            <Item size={{ xs: 6, md: 8 }}>xs=6 md=8</Item>
            <Item size={{ xs: 6, md: 4 }}>xs=6 md=4</Item>
            <Item size={{ xs: 6, md: 4 }}>xs=6 md=4</Item>
            <Item size={{ xs: 6, md: 8 }}>xs=6 md=8</Item>
          </Grid>
        </div>

        <CodeBlock snippet={multipleBreakpointsCode} language="jsx" />
      </section>

      {/* Spacing */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Spacing
        </Typography>
        <p className={styles.sectionDescription}>
          The <code>spacing</code> prop controls space between children. It accepts positive numbers or strings. The prop is converted into a CSS property using the <code>theme.spacing()</code> helper.
        </p>

        <div className={styles.example}>
          <Grid container spacing={spacing}>
            <Item size={4}>size=4</Item>
            <Item size={4}>size=4</Item>
            <Item size={4}>size=4</Item>
          </Grid>
        </div>

        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <label style={{ fontWeight: 500 }}>spacing:</label>
          {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
            <label key={value} style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
              <input
                type="radio"
                name="spacing"
                value={value}
                checked={spacing === value}
                onChange={() => setSpacing(value)}
              />
              <span>{value}</span>
            </label>
          ))}
        </div>

        <CodeBlock snippet={spacingCode} language="jsx" />
      </section>


      {/* Interactive */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Interactive
        </Typography>
        <p className={styles.sectionDescription}>
          Below is an interactive demo that helps to explore the visual results of the different settings.
        </p>

        <div className={styles.example}>
          <Grid container direction={direction} justifyContent={justifyContent} alignItems={alignItems} spacing={2}>
            <Item size={4}>Cell 1</Item>
            <Item size={4}>Cell 2</Item>
            <Item size={4}>Cell 3</Item>
          </Grid>
        </div>

        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>direction</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["row", "row-reverse"].map((value) => (
                <label key={value} style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="direction"
                    value={value}
                    checked={direction === value}
                    onChange={() => setDirection(value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>justifyContent</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"].map((value) => (
                <label key={value} style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="justifyContent"
                    value={value}
                    checked={justifyContent === value}
                    onChange={() => setJustifyContent(value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>alignItems</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["flex-start", "center", "flex-end", "stretch", "baseline"].map((value) => (
                <label key={value} style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="alignItems"
                    value={value}
                    checked={alignItems === value}
                    onChange={() => setAlignItems(value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <CodeBlock snippet={interactiveCode} language="jsx" />
      </section>

      {/* Auto-layout */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Auto-layout
        </Typography>
        <p className={styles.sectionDescription}>
          The auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.
        </p>

        <div className={styles.example}>
          <Grid container spacing={2}>
            <Item size="grow">size=grow</Item>
            <Item size={8}>size=8</Item>
            <Item size="grow">size=grow</Item>
          </Grid>
        </div>

        <CodeBlock snippet={autoLayoutCode} language="jsx" />
      </section>

      {/* Collage Layout */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Collage Layout
        </Typography>
        <p className={styles.sectionDescription}>
          Four equal-height columns. Columns 2 and 4 are split vertically for a collage effect. Responsive: stack on mobile.
        </p>

        <div className={styles.example}>
          <div style={{ background: '#d3d3d3', padding: 16, borderRadius: 8 }}>
          <Grid container spacing={2} alignItems="stretch" style={{ width: '100%' }}>
              {/* Column 1 - full height */}
              <Grid item size={{ xs: 12, md: 3 }}>
                <div style={{ height: '100%', minHeight: 420, background: 'rgb(169 169 169)', border: '2px solid #d3d3d3', borderRadius: 4 }} />
              </Grid>

              {/* Column 2 - split vertically (2/3 + 1/3) */}
              <Grid item size={{ xs: 12, md: 3 }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 420, gap: 0 }}>
                  <div style={{ flex: 2, background: 'rgb(169 169 169)', border: '2px solid #d3d3d3', borderRadius: 4 }} />
                  <div style={{ flex: 1, background: 'rgb(169 169 169)', border: '2px solid #d3d3d3', borderRadius: 4 }} />
                </div>
              </Grid>

              {/* Column 3 - full height */}
              <Grid item size={{ xs: 12, md: 3 }}>
                <div style={{ height: '100%', minHeight: 420, background: 'rgb(169 169 169)', border: '2px solid #d3d3d3', borderRadius: 4 }} />
              </Grid>

              {/* Column 4 - split vertically (1/3 + 2/3) */}
              <Grid item size={{ xs: 12, md: 3 }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 420, gap: 0 }}>
                  <div style={{ flex: 1, background: 'rgb(169 169 169)', border: '2px solid #d3d3d3', borderRadius: 4 }} />
                  <div style={{ flex: 2, background: 'rgb(169 169 169)', border: '2px solid #d3d3d3', borderRadius: 4 }} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <CodeBlock snippet={collageCode} language="jsx" />
      </section>
    </div>
  );
};

export default DocsGrid;

