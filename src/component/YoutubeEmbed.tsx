import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <Paper
    square
    elevation={0}
    sx={{
      padding: "16px",
      margin: "25px",
      borderRadius: "5px",
    }}
  >
    <Typography textAlign="center">Trailer</Typography>

    <iframe
      className="youtube-video"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Paper>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
