import { Container, Typography } from "@mui/material";
import EmergencyNumber from "./components/EmergencyNumber";
import LatestInfo from "./components/LatestInfo";

function App(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        color="initial"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        Latest Earthquake
      </Typography>
      <LatestInfo />
      <EmergencyNumber />
    </Container>
  );
}

export default App;
