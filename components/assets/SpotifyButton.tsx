import { Box, Button } from "@mui/material";
import { FC } from "react";

type SpotifyButtonProps = {
  externalUrl: string;
};

const SpotifyButton: FC<SpotifyButtonProps> = ({ externalUrl }) => {
  return (
    <Box display={"flex"} justifyContent={{ xs: "center", tiny: "flex-start" }}>
      <a
        href={externalUrl}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          variant={"main"}
          size={"small"}
          sx={{ width: "auto", fontSize: "12px", marginTop: "10px" }}
        >
          Listen on spotify
        </Button>
      </a>
    </Box>
  );
};

export default SpotifyButton;
