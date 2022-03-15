import {FC} from "react";
import {Box, Grid} from "@mui/material";
import {LibraryCardContainer} from "./LibraryCard.styles";
import Image from 'next/image'
import {formatName} from "../../helpers/formatName";
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type LibraryCardProps = {
  playlist: PlaylistObjectFull;
}

const LibraryCard:FC<LibraryCardProps> = ({playlist:{name, images, description}}) => {
  return (
    <Grid item xs={2}>
      <LibraryCardContainer>
        <Box display={'flex'} alignItems={'flex-start'} sx={{'& img': {borderRadius: '8px'}}}>
          <Box sx={{flexBasis: '40%'}}>
            <Image src={images[0].url} width={200} height={200}/>
          </Box>
          <Box marginLeft={'15px'} sx={{flexBasis: '60%'}}>
            <Box fontWeight={'700'} fontSize={'16px'} marginBottom={'10px'}>{name}</Box>
            <Box sx={{wordBreak: 'break-all', fontWeight: '300', color: 'rgba(255,255,255, 0.7)'}}>
              {formatName(description, 150)}
            </Box>
          </Box>
        </Box>
      </LibraryCardContainer>
    </Grid>
  );
};

export default LibraryCard