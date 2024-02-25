import { Grid, Typography, Container, Button } from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/gift.png";

const Gifts = () => {
  return (
    <Container sx={{ padding: 2 }}>
      <Grid className="location-container">
        <img src={EventIcon} alt="Event Icon" className="event-icon" />
        <Typography
          variant="h5"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#4f5046" }}
        >
          REGALOS
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          Lo más importante es tu presencia, <br /> pero si quieres hacernos un
          regalo,
          <br />
          aqui tienes nuestros datos.
        </Typography>
        <Button variant="contained" className="button">
          Datos Bancarios
        </Button>
      </Grid>
    </Container>
  );
};

export default Gifts;
