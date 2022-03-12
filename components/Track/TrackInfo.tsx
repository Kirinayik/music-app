import Image from "next/image";
import {Box} from "@mui/material";
import {formatName} from "../../helpers/formatName";
import Link from "next/link";
import {TrackArtist} from "./Track.styles";
import {FC} from "react";

type TrackInfoProps = {
  image: string;
  name: string;
  artist: string;
}

const TrackInfo:FC<TrackInfoProps> = ({image, name, artist}) => {
  return (
    <Box display={'flex'} alignItems={'flex-end'} flexBasis={{xs:'80%',sm: '40%', md: '50%', big: '60%'}}>
      <Image src={image} width={40} height={40}/>
      <Box marginLeft={'15px'}>
        <Box fontWeight={'600'}>{formatName(name, 16)}</Box>
        <Link href={'/'}>
          <TrackArtist>
            {formatName(artist, 20)}
          </TrackArtist>
        </Link>
      </Box>
    </Box>
  );
};

export default TrackInfo