import React from "react";
import Card from "../../components/Card/Card";
import MusicPlayer from "../../components/Card/MusicPlayer";
import Typography from "../../components/Typography/Typography";
import CodeBlock from "../../components/Codeblock/Codeblock";
import styles from "./docs.module.scss";

// References: ChatGPT, Cursor
const DocsCard = () => {
  const basicCode = `<Card variant="standard">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>`;

  const outlinedCode = `<Card variant="outlined">
  <h3>Outlined Card</h3>
  <p>This is an outlined card variant</p>
</Card>`;

  const complexCode = `<Card>
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <img src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=80" alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />
    <div>
      <strong>Delicious Pasta</strong>
      <div style={{ fontSize: 12, opacity: .7 }}>by Chef Mario</div>
    </div>
  </div>
  <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=640" alt="dish" style={{ width: '100%', height: 200, objectFit: 'cover', marginTop: 12, borderRadius: 8 }} />
  <p style={{ marginTop: 12 }}>A simple yet flavorful pasta with tomatoes and basil.</p>
</Card>`;

  const mediaCode = `<Card>
  <img src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=640" alt="lizard" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }} />
  <h3 style={{ marginTop: 12 }}>Pasta</h3>
  <p>A simple yet flavorful pasta with tomatoes and basil.</p>
</Card>`;

  const primaryActionCode = `<Card>
  <h3>Pasta</h3>
  <p>A simple yet flavorful pasta with tomatoes and basil.</p>
  <button style={{ marginTop: 12, padding: '8px 16px' }}>Learn More</button>
</Card>`;


  const musicPlayerCode = `<Card>
  <MusicPlayer />
</Card>`;

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Card</h1>
        <p className={styles.description}>
          Cards contain content and actions about a single subject.
        </p>
      </div>

      {/* Basics */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Basics
        </Typography>
        <p className={styles.sectionDescription}>
          The default Card uses elevation and padding for content separation.
        </p>

        <div className={styles.example}>
          <div className={styles.cardWrapper}>
          <Card>
            <h3>Standard Card</h3>
            <p>This is a standard card with shadow and padding.</p>
          </Card>
          </div>
        </div>

        <CodeBlock snippet={basicCode} language="jsx" />
      </section>

      {/* Outlined Card */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Outlined
        </Typography>
        <p className={styles.sectionDescription}>
          An alternative style without elevation that uses an outline.
        </p>

        <div className={styles.example}>
          <div className={styles.cardWrapper}>
          <Card variant="outlined">
            <h3>Outlined Card</h3>
            <p>This is an outlined card variant.</p>
          </Card>
          </div>
        </div>

        <CodeBlock snippet={outlinedCode} language="jsx" />
      </section>

      {/* Complex interaction */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Complex interaction
        </Typography>
        <p className={styles.sectionDescription}>
          Combine avatars, media and text for richer cards.
        </p>

        <div className={styles.example}>
          <div className={styles.cardWrapper}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <img
                src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=80"
                alt="avatar"
                style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0 }}
              />
              <div style={{ minWidth: 0, flex: 1 }}>
                <strong>Delicious Pasta</strong>
                <div style={{ fontSize: 12, opacity: 0.7 }}>by Chef Mario</div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=640"
              alt="dish"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                marginTop: 12,
                borderRadius: 8,
              }}
            />
            <p style={{ marginTop: 12 }}>
              A simple yet flavorful pasta with tomatoes and basil.
            </p>
          </Card>
          </div>
        </div>

        <CodeBlock snippet={complexCode} language="jsx" />
      </section>

      {/* Media */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Media
        </Typography>
        <p className={styles.sectionDescription}>
          Include responsive media like images in your cards.
        </p>

        <div className={styles.example}>
          <div className={styles.cardWrapper}>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=640"
              alt="lizard"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <h3 style={{ marginTop: 12 }}>Pasta</h3>
            <p>A simple yet flavorful pasta with tomatoes and basil</p>
          </Card>
          </div>
        </div>

        <CodeBlock snippet={mediaCode} language="jsx" />
      </section>

      {/* Primary action */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Primary action
        </Typography>
        <p className={styles.sectionDescription}>
          Add buttons to drive users to key actions.
        </p>

        <div className={styles.example}>
          <div className={styles.cardWrapper}>
          <Card>
            <h3>Pasta</h3>
            <p>A simple yet flavorful pasta with tomatoes and basil</p>
            <button
              style={{
                marginTop: 12,
                padding: "8px 16px",
                borderRadius: 8,
                background: "#7c3aed",
                color: "#fff",
                width: "100%",
                cursor: "pointer",
                border: "none",
              }}
            >
              Learn More
            </button>
          </Card>
          </div>
        </div>

        <CodeBlock snippet={primaryActionCode} language="jsx" />
      </section>


      {/* Music Player */}
      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Music Player
        </Typography>
        <p className={styles.sectionDescription}>
          A full-featured music player card with album art, playback controls, and volume control.
        </p>

        <div className={styles.example}>
          <Card>
            <MusicPlayer />
          </Card>
        </div>

        <CodeBlock snippet={musicPlayerCode} language="jsx" />
      </section>

    </div>
  );
};

export default DocsCard;
