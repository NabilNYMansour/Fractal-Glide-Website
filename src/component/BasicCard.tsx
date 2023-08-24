import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent>
        <Typography textAlign="center">{title}</Typography>

        <Typography
          sx={{ mb: 2.5, fontSize: "0.6em" }}
          component="div"
          color="text.secondary"
          textAlign="center"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
