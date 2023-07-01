import {
  Typography,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { postReview } from "../services/service";

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

const SuggestionPage = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSendSubmit = (data) => {
    const re = /\S+@\S+\.\S+/;
    if(re.test(data.correo)){
      const params = {
        data
      }
      console.log(params);
      postReview(params);
      // postReview({
      //   correo: data.correo,
      //   mensaje: data.mensaje,
      // });
    }
  }
  return (
    <Paper elevation={20} sx={{ borderRadius: 12, p: 5, mt: 5 }}>
      <form onSubmit={handleSubmit(onSendSubmit)}>
        <Stack direction="column" spacing={3}>
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Buzón de sugerencias
            </Typography>
            <TextField
              id="email"
              placeholder="Ingrese su correo electrónico"
              label="Correo Electronico"
              type="email"
              variant="filled"
              sx={{ width: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              {...register("correo", { required: true})}
            />
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
