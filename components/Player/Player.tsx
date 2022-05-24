import { PlayerContainer } from "./Player.styles";
import { useAppDispatch, useAppSelector } from "../../store";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { setIsPlaying } from "../../store/player/player";
import { useEffect, useRef } from "react";

const Player = () => {
  const playerRef = useRef<any>();
  const dispatch = useAppDispatch();
  const { href, isPlaying } = useAppSelector((state) => state.player);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.audio.current.play();
      } else {
        playerRef.current.audio.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <PlayerContainer>
      <AudioPlayer
        ref={playerRef}
        style={{
          background: "inherit",
        }}
        volume={0.3}
        onPlay={() => dispatch(setIsPlaying(true))}
        onPause={() => dispatch(setIsPlaying(false))}
        src={href ? href : undefined}
      />
    </PlayerContainer>
  );
};

export default Player;
