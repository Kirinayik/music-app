import { PlayerContainer } from "./Player.styles";
import { useAppSelector } from "../../store";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  const { href } = useAppSelector((state) => state.player);

  return (
    <PlayerContainer>
      <AudioPlayer
        style={{
          background: "inherit",
        }}
        volume={0.3}
        src={href ? href : undefined}
      />
    </PlayerContainer>
  );
};

export default Player