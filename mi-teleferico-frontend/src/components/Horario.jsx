import { Box, Paper, Stack, Typography } from "@mui/material";
import { memo } from "react";

const Horario = () => {
    return(
        <Stack sx = {{ width: 1,  py:4}} spacing={3}>
            <Box sx={{
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,

          }}>Lunes a Sábado</Box>
            <Box sx={{
            fontFamily: "sans-serif",
            textAlign: "center",
            fontWeight: "medium",
            fontSize: 24,

          }}>06:00 - 22:00</Box>
            <Box sx={{
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,

          }}>Domingos y Feriados</Box>
            <Box sx={{
            fontFamily: "sans-serif",
            textAlign: "center",
            fontWeight: "medium",
            fontSize: 24,

          }}>07:00 - 21:00</Box>

        </Stack>
    );
}
export default memo(Horario);