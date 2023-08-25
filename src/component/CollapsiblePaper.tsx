import * as React from "react";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Paper } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton disableRipple {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CollapsiblePaper({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={10} style={{ minWidth: "75vw" }}>
      <CardActions>
        <Button
          onClick={handleExpandClick}
          color="slightgray"
          style={{
            textTransform: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography textAlign="left">{title}</Typography>
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            sx={{ mb: 2.5, fontSize: "0.6em" }}
            component="div"
            color="text.secondary"
            textAlign="center"
          >
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Paper>
  );
}
