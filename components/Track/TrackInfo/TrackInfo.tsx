import Image from "next/image";
import {Box} from "@mui/material";
import Link from "next/link";
import {TrackArtist, TrackName} from "../Track.styles";
import {FC} from "react";

type TrackInfoProps = {
  image: string | null;
  name: string;
  artist: string;
  id: string;
}

const TrackInfo:FC<TrackInfoProps> = ({image, name, artist, id}) => {
  return (
    <Box display={'flex'} alignItems={'center'} height={'100%'}
    >
      {image && (
        <Box>
          <Image src={image} layout='fixed' width={50} height={50} alt={''}/>
        </Box>
      )}
      <Box marginLeft={image ? {xs: '10px', tiny: '15px'} : '0'} sx={{overflow: 'hidden'}}>
        <TrackName>{name}</TrackName>
          <Link href={`/artists/${id}`} passHref>
            <TrackArtist>{artist}</TrackArtist>
          </Link>
      </Box>
    </Box>
  );
};

export default TrackInfo