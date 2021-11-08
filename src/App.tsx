import { Container, Typography } from "@mui/material";
import LatestInfo from "./components/LatestInfo";

function App(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h2"
        component="h1"
        color="initial"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        Latest Earthquake
      </Typography>
      <LatestInfo />
    </Container>
  );
}

export default App;
