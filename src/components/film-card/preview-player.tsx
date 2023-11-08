import {useEffect, useRef, useState} from 'react';

export type PreviewProps = {
  videoSource: string;
  posterSource: string;
  isHovered: boolean;
}

export function PreviewPlayer({videoSource, posterSource, isHovered}: PreviewProps): JSX.Element {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    const interval = setInterval(() => {
      setIsPlaying(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      setIsPlaying(false);
    };
  }, [isHovered]);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current?.play();
      } else {
        playerRef.current?.load();
      }
    }
  }, [isPlaying]);

  return (
    <video
      ref={playerRef}
      width="280"
      height="175"
      src={videoSource}
      poster={posterSource}
      muted
    />
  );
}
