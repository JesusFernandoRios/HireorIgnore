import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ItemCard({ props }) {
  return (
    <Card
      variant="oulined"
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "300px",
        width: "300px",
      }}
    >
      <CardMedia
        sx={{ height: 100 }}
        image={props.avatar}
        title={props.first_name + props.last_name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.first_name + props.last_name}
        </Typography>

        <Typography>Title: {props.employment.title}</Typography>

        <Typography>Phone Number: {props.phone_number}</Typography>
        <Typography>
          Social Insurance Number: {props.social_insurance_number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="success" variant="contained">
          Hire
        </Button>
        <Button color="error" variant="contained">
          Ignore
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
