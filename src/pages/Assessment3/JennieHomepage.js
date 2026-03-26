import React, { useEffect, useRef, useState } from "react";
import styles from "../Assessment3/jennieHomepage.module.scss";
import { useOutletContext, Outlet } from "react-router-dom";

// Import components from the "@kristinet/ui" library - which are built in the Assessment 2
import Stack from "../../components/Stack/Stack";
import Grid from "../../components/Grid/Grid";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import AppBar from "../../components/AppBar/AppBar";
import { Youtube, Instagram, Facebook, Volume2 } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import {
  motion,
  animate,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimationFrame,
  useVelocity,
} from "framer-motion";

// Import images
import heroImage from "../../JennieImage/heroImage.jpg";
import daily1 from "../../JennieImage/daily1.jpg";
import daily2 from "../../JennieImage/daily2.jpg";
import daily3 from "../../JennieImage/daily3.jpg";
import daily4 from "../../JennieImage/daily4.jpg";
import daily5 from "../../JennieImage/daily5.jpg";
import daily6 from "../../JennieImage/daily6.jpg";
import likeJennie from "../../JennieImage/likeJennie.jpg";
import mantra from "../../JennieImage/mantra.jpg";
import zen from "../../JennieImage/zen.jpg";
import solo from "../../JennieImage/solo.jpg";
import RubyPlaylist from "../../JennieImage/RubyPlaylist.jpg";
import profile from "../../JennieImage/profile.png";
import youAndMe from "../../JennieImage/you&me.jpg";
import handlebars from "../../JennieImage/handlebars.jpg";
import jennieLogo from "../../JennieImage/Jennie_logo_white.png";
import extraL from "../../JennieImage/extraL.jpg";
import seoulCity from "../../JennieImage/seoulcity.jpg";

const wrap = (min, max, value) => {
  const range = max - min;
  if (range === 0) return min;
  return ((((value - min) % range) + range) % range) + min;
};

// References: ChatGPT & Cursor & motion.dev

/**
 * ParallaxText (smooth, seamless infinite loop) for text - "Jennie Kim" & "Meet Here" - 
 
 Because we use translateX with percentage values, we render 2 consecutive copies
 and wrap them within the range [-100, 0]. When the translation exceeds -100%,
 it jumps back to 0% (seamless).
 
 baseVelocity: percentage per second (e.g. -5 => moves left 5% per second)
 */

const ParallaxText = ({ text, baseVelocity = -5, className }) => {
  const baseX = useMotionValue(0); // percent
  const { scrollContainer } = useOutletContext?.() || {}; 
  const { scrollY } = useScroll({ container: scrollContainer });
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrapping the horizontal movement
  // Wraps within 0% to -25% because the text block is repeated four times
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`); 

  const directionFactor = useRef(1);
  // Animation Frame Callback
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const repeatedText = `${text} — `;
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          x,
        }}
      >
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </motion.div>
    </div>
  );
};

const springConfig = { damping: 20, stiffness: 150, restDelta: 0.001 };

/* This function creates a smooth animated mouse position tracker.
   It converts raw mouse movement into values between -1 and 1, 
   and applies animation “spring” smoothing
*/
function useMouseParallax() {
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      /* This converts mouse position into a range of -1 to 1:
            -1 = left/top edge
            0 = centre of screen
            1 = right/bottom edge
      */
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}

const pointerSpring = { damping: 15, stiffness: 200, restDelta: 0.001 };

/* I've seen the "followPointer" in some of the website before and I'm curious how we can do it
   so I checked motion dev and there's an animation called "Follow pointer with Spring": https://motion.dev/docs/react-use-spring
   and I followed to adapt it to this homepage - using for heroSection only. 
   I did use ChatGPT to help debug the code.
*/
function useFollowPointerInContainer(ref) {
  const [isInside, setIsInside] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Initialise the values at the centre of the container
  const x = useSpring(0, pointerSpring);
  const y = useSpring(0, pointerSpring);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Initialise the values at the centre of the container
    const rect = container.getBoundingClientRect();
    if (!initialized && rect.width > 0 && rect.height > 0) {
      x.set(rect.width / 2);
      y.set(rect.height / 2);
      setInitialized(true);
    }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // Check if the mouse is inside the container
      const inside =
        relativeX >= 0 &&
        relativeX <= rect.width &&
        relativeY >= 0 &&
        relativeY <= rect.height;

      setIsInside(inside);

      if (inside) {
        // Clamp the values so the ball never leaves the container bounds
        // The ball has a size of 50px, so its centre must stay within the safe area
        const ballSize = 50;
        const halfBall = ballSize / 2;
        const clampedX = Math.max(
          halfBall,
          Math.min(relativeX, rect.width - halfBall)
        );
        const clampedY = Math.max(
          halfBall,
          Math.min(relativeY, rect.height - halfBall)
        );
        x.set(clampedX);
        y.set(clampedY);
      }
    };

    const handleMouseEnter = () => {
      setIsInside(true);
    };

    const handleMouseLeave = () => {
      setIsInside(false);
    };

    // Use mousemove instead of pointermove for compatibility
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, x, y, initialized]);

  return { x, y, isInside };
}

const JennieHomepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [volume, setVolume] = useState([75]); // Volume ->> 0-100
  const { scrollContainer } = useOutletContext();
  const discographyRef = useRef(null);
  const aboutImageRef = useRef(null);
  const discographyRowRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: discographyRowRef });
  const heroContainerRef = useRef(null);

  // Controls the opacity of the left and right fade masks
  const leftMaskOpacity = useTransform(scrollXProgress, [0, 0.1], [0, 1]);
  const rightMaskOpacity = useTransform(scrollXProgress, [0.9, 1], [1, 0]);

  // Hook for the parallax effect of the hero image
  const { mouseX, mouseY } = useMouseParallax();
  // Move the image within the range -20px to 20px
  const heroImageX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const heroImageY = useTransform(mouseY, [-1, 1], [-20, 20]);

  // Hook for the ball that follows the pointer
  const {
    x: pointerX,
    y: pointerY,
    isInside: isPointerInside,
  } = useFollowPointerInContainer(heroContainerRef);

  // Combine transforms to centre the ball relative to the pointer
  // The values are already clamped inside the hook, so we only subtract half of the ball size to centre it
  const pointerXCentered = useTransform(pointerX, (val) => {
    const ballSize = 50;
    // Ensure the value is not negative
    return Math.max(0, val - ballSize / 2);
  });
  const pointerYCentered = useTransform(pointerY, (val) => {
    const ballSize = 50;
    // Ensure the value is not negative
    return Math.max(0, val - ballSize / 2);
  });

  useEffect(() => {
    if (isPointerInside) {
      console.log("Pointer inside:", {
        x: pointerX.get(),
        y: pointerY.get(),
        isInside: isPointerInside,
      });
    }
  }, [isPointerInside, pointerX, pointerY]);

  // Tour dates data
  const tourDates = [
    {
      place: "COACHELLA",
      location: "POST MALONE, CALIFORNIA",
      dates: "2025.04.13. TUE & 20. TUE",
    },
    {
      place: "GOYANG",
      location: "GOYANG STADIUM",
      dates: "2025.07.05. SAT & 06. SUN",
    },
    {
      place: "LOS ANGELES",
      location: "SOFI STADIUM",
      dates: "2025.07.12. SAT",
    },
    {
      place: "CHICAGO",
      location: "SOLDIER FIELD",
      dates: "2025.07.18 FRI",
    },
    {
      place: "TORONTO",
      location: "ROGERS STADIUM",
      dates: "2025.07.22 TUE",
    },
    {
      place: "NEW YORK",
      location: "CITIFIELD",
      dates: "2025.07.26 SAT",
    },
    {
      place: "PARIS",
      location: "STADE DE FRANCE",
      dates: "2025.08.02 SAT",
    },
    {
      place: "MILAN",
      location: "IPPODROMO SNAI LA MAURA",
      dates: "2025.08.06 WED",
    },
  ];

  // Discography data
  const albums = [
    {
      title: "like JENNIE",
      time: "7 months ago",
      image: likeJennie,
    },
    {
      title: "Mantra",
      time: "1 year ago",
      image: mantra,
    },
    {
      title: "ZEN",
      time: "9 months ago",
      image: zen,
    },
    {
      title: "SOLO",
      time: "6 years ago",
      image: solo,
    },
    {
      title: "ExtraL(ft. Doechii)",
      time: "7 months ago",
      image: extraL,
    },
    {
      title: "You & Me",
      time: "2 year ago",
      image: youAndMe,
    },
    {
      title: "Seoul City",
      time: "7 months ago",
      image: seoulCity,
    },
    {
      title: "Handlebars",
      time: "7 months ago",
      image: handlebars,
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* --- 1. HEADER NAVIGATION --- */}
      <AppBar
        position="fixed"
        color="transparent"
        variant="standard"
        centerLogo={true}
        leftMenuItems={[
          { label: "MUSIC", href: "#music" },
          { label: "EVENTS", href: "#events" },
        ]}
        logo={
          <img src={jennieLogo} alt="Jennie" className={styles.headerLogo} />
        }
        className={styles.header}
        rightMenuItems={[
          { label: "GALLERY", href: "#gallery" },
          { label: "FASHION", href: "#fashion" },
        ]}
      />

      {/* --- 2. HERO SECTION --- */}
      <div className={styles.heroSection}>
        <div ref={heroContainerRef} className={styles.heroImageContainer}>
          <motion.div
            className={styles.heroImageWrapper}
            style={{ x: heroImageX, y: heroImageY, scale: 1.05 }}
          >
            <img src={heroImage} alt="Jennie" className={styles.heroImage} />
          </motion.div>
          {/* The ball follow the pointer */}
          <motion.div
            className={styles.pointerBall}
            style={{
              x: pointerXCentered,
              y: pointerYCentered,
              opacity: isPointerInside ? 1 : 0.5, 
              scale: isPointerInside ? 1 : 0.8,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* --- 3. MUSIC PLAYER BAR --- */}
      <div className={styles.musicBar}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          useFlexGap={true}
          className={styles.musicBarContent}
        >
          {/* Album Art & Info Container */}
          <div className={styles.albumContainer}>
            {/* Album Art */}
            <div className={styles.albumArt}>
              <img src={RubyPlaylist} alt="Ruby Album" />
            </div>

            {/* Album Info */}
            <Stack spacing={1} useFlexGap={true}>
              <Typography variant="h6" className={styles.albumTitle}>
                RUBY
              </Typography>
              <Typography variant="caption" className={styles.albumSubtitle}>
                LATEST ALBUM
              </Typography>
            </Stack>
          </div>

          {/* Player Controls */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            useFlexGap={true}
            className={styles.playerControls}
          >
            <button className={styles.playButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className={styles.timeText}>01:23</span>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <span className={styles.timeText}>03:45</span>
          </Stack>

          {/* Volume Control */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            useFlexGap={true}
            className={styles.volumeControl}
          >
            <Volume2 size={18} className={styles.volumeIcon} />
            <Slider.Root
              className={styles.volumeSlider}
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              aria-label="Volume"
            >
              <Slider.Track className={styles.sliderTrack}>
                <Slider.Range className={styles.sliderRange} />
              </Slider.Track>
              <Slider.Thumb className={styles.sliderThumb} asChild>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileDrag={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ width: "100%", height: "100%" }}
                />
              </Slider.Thumb>
            </Slider.Root>
            <motion.span
              className={styles.volumeValue}
              key={volume[0]}
              initial={{ scale: 1.2, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {volume[0]}%
            </motion.span>
          </Stack>
        </Stack>
      </div>

      {/* --- 4. ABOUT SECTION --- */}
      <div className={`${styles.section} ${styles.aboutSection}`}>
        <ParallaxText
          text="JENNIE KIM"
          baseVelocity={-5}
          className={styles.aboutMarquee}
        />
        <ParallaxText
          text="MEET HERE"
          baseVelocity={5}
          className={styles.aboutMarqueeSecondary}
        />
        <Grid
          container
          spacing={4}
          alignItems="center"
          className={styles.aboutGridContainer}
        >
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} useFlexGap={true}>
              <Typography variant="overline" className={styles.aboutTags}>
                Singer | Rapper | Songwriter | Actress
              </Typography>
              <Typography variant="h2" className={styles.aboutTitle}>
                JENNIE KIM
              </Typography>
              <Typography variant="body1" className={styles.aboutText}>
                Jennie Kim (born January 16, 1996) is a South Korean singer,
                rapper, and actress. Best known as a member of the global K-pop
                group BLACKPINK, Jennie made her solo debut with the single
                "SOLO" in 2018, which became a massive hit. She is recognized
                for her powerful stage presence, unique fashion sense, and
                influence in both music and fashion industries.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="contained"
                  className={styles.meetButton}
                  style={{ backgroundColor: "#cc0000", color: "white" }}
                >
                  Meet Jennie Here →
                </Button>
              </motion.div>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <div ref={aboutImageRef} className={styles.aboutImage}>
              <motion.img
                src={profile}
                alt="Jennie Kim"
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {/* --- 5. DISCOGRAPHY SECTION --- */}
      <section
        id="music"
        ref={discographyRef}
        className={`${styles.section} ${styles.discographySection}`}
      >
        <Stack spacing={4} alignItems="center" useFlexGap={true}>
          <Typography variant="h3" className={styles.sectionTitle}>
            DISCOGRAPHY
          </Typography>
          <div className={styles.titleUnderline}></div>

          <div className={styles.discographyContainer}>
            <motion.div
              className={styles.discographyMaskLeft}
              style={{ opacity: leftMaskOpacity }}
            />
            <motion.div
              className={styles.discographyMaskRight}
              style={{ opacity: rightMaskOpacity }}
            />
            <motion.div
              ref={discographyRowRef}
              className={styles.discographyRow}
            >
              {albums.map((album, index) => (
                <Card key={index} className={styles.albumCard}>
                  <div className={styles.albumImageContainer}>
                    <img
                      src={album.image}
                      alt={album.title}
                      className={styles.albumImage}
                    />
                  </div>
                  <Stack
                    spacing={1}
                    useFlexGap={true}
                    className={styles.albumInfo}
                  >
                    <Typography variant="h6" className={styles.albumName}>
                      {album.title}
                    </Typography>
                    <Typography variant="caption" className={styles.albumTime}>
                      {album.time}
                    </Typography>
                  </Stack>
                </Card>
              ))}
            </motion.div>
          </div>
        </Stack>
      </section>

      {/* --- 6. TOUR DATES SECTION --- */}
      <div className={`${styles.section} ${styles.tourSection}`}>
        <Stack spacing={4} alignItems="center" useFlexGap={true}>
          <Typography variant="h3" className={styles.tourTitle}>
            MEET JENNIE HERE
          </Typography>

          <div className={styles.tourList}>
            {tourDates.map((tour, index) => (
              <motion.div
                key={index}
                className={styles.tourItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  useFlexGap={true}
                  className={styles.tourRow}
                >
                  <Stack spacing={1} useFlexGap={true}>
                    <Typography variant="h6" className={styles.tourPlace}>
                      {tour.place}
                    </Typography>
                    <Typography variant="body2" className={styles.tourLocation}>
                      {tour.location}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" className={styles.tourDate}>
                    {tour.dates}
                  </Typography>
                </Stack>
                {index < tourDates.length - 1 && (
                  <div className={styles.tourDivider}></div>
                )}
              </motion.div>
            ))}
          </div>
        </Stack>
      </div>

      {/* --- 7. GALLERY SECTION --- */}
      <div
        className={`${styles.section} ${styles.gallerySection}`}
        id="gallery"
      >
        <div className={styles.galleryWrapper}>
          <Grid
            container
            spacing={2}
            alignItems="stretch"
            justifyContent="space-between"
            className={styles.galleryCollageGrid}
          >
            {/* Column 1 - full height */}
            <Grid item size={{ xs: 12, md: 3 }}>
              <motion.div
                className={styles.galleryColumnFull}
                initial="inactive"
                animate={hoveredIndex === 0 ? "active" : "inactive"}
                variants={{
                  inactive: {
                    opacity: 0.5,
                    filter: "grayscale(100%) brightness(0.5)",
                    scale: 1,
                  },
                  active: {
                    opacity: 1,
                    filter: "grayscale(0%) brightness(1)",
                    scale: 1.03,
                  },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onHoverStart={() => setHoveredIndex(0)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <img src={daily4} alt="Gallery 1 full" />
              </motion.div>
            </Grid>

            {/* Column 2 - split 2/3 + 1/3 */}
            <Grid item size={{ xs: 12, md: 3 }}>
              <div className={styles.galleryColumnStack}>
                <motion.div
                  className={`${styles.galleryStackItem} ${styles.galleryStackItemLarge}`}
                  initial="inactive"
                  animate={hoveredIndex === 1 ? "active" : "inactive"}
                  variants={{
                    inactive: {
                      opacity: 0.5,
                      filter: "grayscale(100%) brightness(0.5)",
                      scale: 1,
                    },
                    active: {
                      opacity: 1,
                      filter: "grayscale(0%) brightness(1)",
                      scale: 1.03,
                    },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onHoverStart={() => setHoveredIndex(1)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <img src={daily2} alt="Gallery 2 top" />
                </motion.div>
                <motion.div
                  className={`${styles.galleryStackItem} ${styles.galleryStackItemSmall}`}
                  initial="inactive"
                  animate={hoveredIndex === 2 ? "active" : "inactive"}
                  variants={{
                    inactive: {
                      opacity: 0.5,
                      filter: "grayscale(100%) brightness(0.5)",
                      scale: 1,
                    },
                    active: {
                      opacity: 1,
                      filter: "grayscale(0%) brightness(1)",
                      scale: 1.03,
                    },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onHoverStart={() => setHoveredIndex(2)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <img src={daily3} alt="Gallery 3 bottom" />
                </motion.div>
              </div>
            </Grid>

            {/* Column 3 - full height */}
            <Grid item size={{ xs: 12, md: 3 }}>
              <motion.div
                className={styles.galleryColumnFull}
                initial="inactive"
                animate={hoveredIndex === 3 ? "active" : "inactive"}
                variants={{
                  inactive: {
                    opacity: 0.5,
                    filter: "grayscale(100%) brightness(0.5)",
                    scale: 1,
                  },
                  active: {
                    opacity: 1,
                    filter: "grayscale(0%) brightness(1)",
                    scale: 1.03,
                  },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onHoverStart={() => setHoveredIndex(3)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <img src={daily6} alt="Gallery 4 full" />
              </motion.div>
            </Grid>

            {/* Column 4 - split 1/3 + 2/3 */}
            <Grid item size={{ xs: 12, md: 3 }}>
              <div className={styles.galleryColumnStack}>
                <motion.div
                  className={`${styles.galleryStackItem} ${styles.galleryStackItemSmall}`}
                  initial="inactive"
                  animate={hoveredIndex === 4 ? "active" : "inactive"}
                  variants={{
                    inactive: {
                      opacity: 0.5,
                      filter: "grayscale(100%) brightness(0.5)",
                      scale: 1,
                    },
                    active: {
                      opacity: 1,
                      filter: "grayscale(0%) brightness(1)",
                      scale: 1.03,
                    },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onHoverStart={() => setHoveredIndex(4)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <img src={daily1} alt="Gallery 5 top" />
                </motion.div>
                <motion.div
                  className={`${styles.galleryStackItem} ${styles.galleryStackItemLarge}`}
                  initial="inactive"
                  animate={hoveredIndex === 5 ? "active" : "inactive"}
                  variants={{
                    inactive: {
                      opacity: 0.5,
                      filter: "grayscale(100%) brightness(0.5)",
                      scale: 1,
                    },
                    active: {
                      opacity: 1,
                      filter: "grayscale(0%) brightness(1)",
                      scale: 1.03,
                    },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onHoverStart={() => setHoveredIndex(5)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <img src={daily5} alt="Gallery 6 bottom" />
                </motion.div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* --- 8. FOOTER --- */}
      <div className={styles.footer}>
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 4 }}>
            <div className={styles.footerLogoContainer}>
              <img
                src={jennieLogo}
                alt="Jennie Logo"
                className={styles.footerLogoImage}
              />
            </div>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              useFlexGap={true}
              className={styles.footerNav}
            >
              <a href="#music" className={styles.footerLink}>
                MUSIC
              </a>
              <a href="#event" className={styles.footerLink}>
                EVENT
              </a>
              <a href="#gallery" className={styles.footerLink}>
                GALLERY
              </a>
              <a href="#fashion" className={styles.footerLink}>
                FASHION
              </a>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
              useFlexGap={true}
            >
              <Button
                variant="contained"
                className={styles.fanclubButton}
                style={{ backgroundColor: "#cc0000", color: "white" }}
              >
                JOIN FANCLUB
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          useFlexGap={true}
          className={styles.socialIcons}
        >
          <a href="#" className={styles.socialIcon} aria-label="YouTube">
            <Youtube size={24} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="TikTok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.07 6.07 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <Facebook size={24} />
          </a>
        </Stack>
      </div>
    </div>
  );
};

export default JennieHomepage;
