import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { fetchQuake } from "../api/api";
import { Info } from "../Interface/interface";

const LatestInfo = (): JSX.Element => {
  const [infoState, setInfoState] = useState<Info>();
  useEffect(() => {
    fetchQuake().then((data) => {
      setInfoState(data);
    });
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card sx={{ maxWidth: 446 }}>
        <CardMedia
          component="img"
          height="165"
          image={infoState?.data.shakemap}
          alt="latest info"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <strong>location:</strong> {infoState?.data.wilayah}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>date and time :</strong> {infoState?.data.tanggal}{" "}
            {infoState?.data.jam}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>coordinates:</strong> {infoState?.data.coordinates}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>magnitude: {infoState?.data.magnitude} </strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Depth:</strong> {infoState?.data.kedalaman}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>feel from:</strong> {infoState?.data.dirasakan}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>tsunami indication:</strong> {infoState?.data.potensi}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LatestInfo;
