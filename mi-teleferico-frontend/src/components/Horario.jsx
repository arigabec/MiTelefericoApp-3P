import { Paper, Typography } from "@mui/material";

const Horario = () => {
    return(
        <Paper sx = {{ width: 1,  py:2}}>
            <Typography>Lunes a Sábado</Typography>
            <Typography>06:00 - 22:00</Typography>
            <Typography>Domingos y Feriados</Typography>
            <Typography>07:00 - 21:00</Typography>

        </Paper>
    );
}
export default Horario;