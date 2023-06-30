import { Box, Card, Stack } from "@mui/material";
import NextCableCar from "../components/NextCableCar";
import Horario from "../components/Horario";
import { useParams } from "react-router-dom";

const LinePage = () => {
    const { id} = useParams();
    console.log(id);
  return (
    <Box sx={{width: 1, height: 1, m: 2, p:2}}>
    <Stack direction="row" spacing={2} sx={{width: 1}}>
      <Box sx={{width: 2/3}}>Mapa</Box>
      <Stack direction="column" sx={{width: 1/3}} spacing={2}>
      <Card>Activo, Mantenimiento</Card>

        <NextCableCar />
        <Horario/>
        <Card>pan</Card>
        <Card>Queso</Card>
      </Stack>
    </Stack>
    </Box>
  );
};
export default LinePage;
