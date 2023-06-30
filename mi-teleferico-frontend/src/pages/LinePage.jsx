import { Box, Card, Container, Stack, Typography } from "@mui/material";
import NextCableCar from "../components/NextCableCar";
import Horario from "../components/Horario";
import { useLoaderData, useParams } from "react-router-dom";
import { colores } from "./../helpers/colors";
import { useState } from "react";

const LinePage = () => {
  const linea = useLoaderData();
  const { id } = useParams();
  const [sw, setSw] = useState(true);
  console.log(colores[Number(id)]);
  return (
    <Container sx={{ width: 1, height: 1, mt: 2, px: 2 }}>
      <Box
        sx={{
          color: colores[Number(id) - 1],
          fontSize: 50,
          fontFamily: "sans-serif",
          fontWeight: "Bold",
          m: 4
        }}
      >
        Linea {` ${linea[0].attributes.nombre}`}
      </Box>
      <Stack direction="row" spacing={8} sx={{ width: 1, m: 2}}>
        <Stack direction="column" sx={{ width: 2 / 3 }} spacing={2}>
          <Box sx={{ border: "GrayText", background: "#abcdef", height: 1 }}>
            Mapa
          </Box>
        </Stack>

        <Stack direction="column" sx={{ width: 1 / 3 }} spacing={2}>
        <Box
        sx={{
          color: `${sw ? '#4caf50' : '#f44336'}`,
          fontSize: 30,
          fontFamily: "sans-serif",
          fontWeight: 700,
        }}
      >
        La linea está 
        {sw ? ' activa' :' en mantenimiento'}
      </Box>

          <NextCableCar />
          <Horario />
 
        </Stack>
      </Stack>
    </Container>
  );
};
export default LinePage;
