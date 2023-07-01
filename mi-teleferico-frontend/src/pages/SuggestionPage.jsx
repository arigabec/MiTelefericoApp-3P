import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

const SuggestionPage = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSendSubmit = (data) => {
    const re = /\S+@\S+\.\S+/;
    if(re.test(data.correo)){
      console.log(data);

    }
    
  }
  return (
    <Paper elevation={20} sx={{ borderRadius: 12, p: 5, mt: 5 }}>
      <form onSubmit={handleSubmit(onSendSubmit)}>
        <Stack direction="column" spacing={3}>
          <Paper>
            <Box
              sx={{
                fontSize: 28,
                fontFamily: "sans-serif",
                fontWeight: "Bold",
                textAlign: "center",
                weight: 1,
                m: 4,
                bgcolor:'primary'
              }}
            >
              Buzon de Sugerencias
            </Box>

            <TextField
              id="email"
              placeholder="Ingrese su correo electrónico"
              label="Correo Electronico"
              type="email"
              variant="filled"
              sx={{ py: 1, width: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              {...register("correo", { required: true})}

            />
          </Paper>
          <Paper sx={{ width: 1, height: "40%" }}>
            <TextField
              id="email"
              placeholder="Escriba su sugerencia"
              label="Descripción"
              type="text"
              variant="filled"
              multiline
              rows={10}
              sx={{ py: 1, width: 1, height: 1 }}
              {...register("mensaje", { required: true})}
            />
          </Paper>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};
export default SuggestionPage;
