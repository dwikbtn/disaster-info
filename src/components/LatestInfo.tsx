import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const LatestInfo = (): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 446 }}>
      <CardMedia
        component="img"
        height="165"
        image="https://via.placeholder.com/150"
        alt="latest info"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LatestInfo;
