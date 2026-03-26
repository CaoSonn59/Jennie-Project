import React, { useState } from 'react';
import styles from './musicPlayer.module.scss';

// References: ChatGPT & Cursor
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(32); // in seconds
  const [duration, setDuration] = useState(200); // in seconds
  const [volume, setVolume] = useState(50); // percentage

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.musicPlayerCard}>
        <div className={styles.topSection}>
          <div className={styles.albumArt}>
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200"
              alt="Album cover"
            />
          </div>
          <div className={styles.songInfo}>
            <div className={styles.artist}>Jun Pulse</div>
            <div className={styles.title}>คนเก่าเขาทำไว้ดี (Can't wi...</div>
            <div className={styles.album}>Chilling Sunday — คนเก่าเขา...</div>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.timeInfo}>
            <span>{formatTime(currentTime)}</span>
            <span>-{formatTime(duration - currentTime)}</span>
          </div>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            >
              <div className={styles.progressHandle} />
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.controlBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
            </svg>
          </button>
          <button
            className={styles.controlBtn}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button className={styles.controlBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 6v12l8.5-6L13 6zM4 6h4v12H4V6z" />
            </svg>
          </button>
        </div>
        <div className={styles.volumeControl}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
          <div className={styles.volumeTrack}>
            <div
              className={styles.volumeFill}
              style={{ width: `${volume}%` }}
            >
              <div className={styles.volumeHandle} />
            </div>
          </div>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

