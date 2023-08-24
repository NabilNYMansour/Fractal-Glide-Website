import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCardList({
  title,
  entries,
}: {
  title: string;
  entries: string[];
}) {
  return (
    <Card>
      <CardContent>
        <Typography textAlign="center">{title}</Typography>

        <Typography
          sx={{ mb: 2.5, fontSize: "0.6em" }}
          component="div"
          color="text.secondary"
        >
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
