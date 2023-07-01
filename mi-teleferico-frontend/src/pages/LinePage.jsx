import { Box, Card, Container, Paper, Stack, Typography } from "@mui/material";
import NextCableCar from "../components/NextCableCar";
import Horario from "../components/Horario";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFiles } from "../services/service";
import { colores } from "./../helpers/colors";

const LinePage = () => {
  const linea = useLoaderData();
  const { id } = useParams();
  const [sw, setSw] = useState(true);
  console.log(colores[Number(id)]);

  const [files, setFiles] = useState();

  const getData = async () => {
    const dataFiles = await getFiles();
    setFiles(dataFiles);
  };

  const getImage = (files, filename) => {
    if (files) {
      const url =
        "http://localhost:1337" +
        files.filter((file) => file.name == filename)[0].url;
      console.log(url);
      return url;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container sx={{ width: 1, height: 1, mt: 2, px: 2 }}>
      <Paper
        sx={{
          width: "50%",
          pb: 3,
          pt: 1,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          bgcolor: '#eeeeee',
        
        }}
        elevation={5}
      >
        <Box
          sx={{
            color: colores[Number(id) - 1],
            fontSize: 50,
            fontFamily: "sans-serif",
            fontWeight: "Bold",
            textAlign: "center",
            mx: 4,
            mt: 4,
          }}
        >
          Linea {` ${linea[0].attributes.nombre}`}
        </Box>
      </Paper>
      <Paper
        elevation={5}
        sx={{
          p: 5,
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopRightRadius: "20px",
          bgcolor: '#eeeeee',
          
        }}
      >
        <Stack direction="row" spacing={8} sx={{ width: 1, m: 2 }}>
          <Stack direction="column" sx={{ width: 2 / 3 }} spacing={2}>
            <Box sx={{ border: "GrayText", background: "#abcdef", height: 1 }}>
              {linea[0].attributes.imagen && (
                <img
                  src={getImage(files, linea[0].attributes.imagen)}
                  alt="linemap"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                // <CardMedia
                //     sx= {{width: 50, height: 50}}
                //     component="img"
                //     src={getImage(files, line.attributes.logo)} // Replace with the URL of your image
                //     alt="logo"
                // />
              )}
            </Box>
          </Stack>

          <Stack direction="column" sx={{ width: 1 / 3 }} spacing={2}>
            <Box
              sx={{
                color: `${sw ? "#4caf50" : "#f44336"}`,
                fontSize: 30,
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              La linea está
              {sw ? " activa" : " en mantenimiento"}
            </Box>
            <NextCableCar />
            <Horario />
            <Box
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              Duración del trayecto: 
            </Box>
            <Box sx={{
              fontFamily: "monospace",
              textAlign: "center",
              fontWeight: "medium",
              fontSize: 24,

            }}>
              {linea[0].attributes.duracion}
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default LinePage;
