import {FC} from "react";
import {Box, Grid} from "@mui/material";
import Image from 'next/image'
import {formatName} from "../../../helpers/formatName";
import {LibraryCardContainer} from "../Library.styles";
import Link from 'next/link'
import Logo from '../../../public/img/logo.png'
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;
import PlaylistObjectSimplified = SpotifyApi.PlaylistObjectSimplified;

type LibraryCardProps = {
  playlist: PlaylistObjectFull | PlaylistObjectSimplified;
}

const LibraryCard:FC<LibraryCardProps> = ({playlist:{name, images, description, id}}) => {
  return (
    <Grid item xs={2}>
      <Link href={`/playlists/${id}`} passHref>
        <LibraryCardContainer>
          <Box display={'flex'} alignItems={'flex-start'} sx={{'& img': {borderRadius: '8px'}}}>
            <Box sx={{flexBasis: '40%'}}>
              {images[0]?.url ? (
                <Image src={images[0].url} width={200} height={200} alt={''}/>
              ) : (
                <Image src={Logo} width={200} height={200} alt={''}/>
              )}
            </Box>
            <Box marginLeft={'15px'} sx={{flexBasis: '60%'}}>
              <Box fontWeight={'700'} fontSize={'16px'} marginBottom={'10px'}>{name}</Box>
              <Box sx={{wordBreak: 'break-all', fontWeight: '300', color: 'rgba(255,255,255, 0.7)'}}>
                {formatName(description, 150)}
              </Box>
            </Box>
          </Box>
        </LibraryCardContainer>
      </Link>
    </Grid>
  );
};

export default LibraryCard