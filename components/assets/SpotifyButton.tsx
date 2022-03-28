import {Button} from "@mui/material";
import {FC} from "react";

type SpotifyButtonProps = {
  externalUrl: string;
}

const SpotifyButton:FC<SpotifyButtonProps> = ({externalUrl}) => {
  return (
    <a href={externalUrl} style={{textDecoration: 'none'}} target="_blank" rel="noreferrer">
      <Button variant={'main'} size={'small'} sx={{width: 'auto', fontSize: '12px', marginTop: '10px'}}>
        Listen on spotify
      </Button>
    </a>
  );
};

export default SpotifyButton