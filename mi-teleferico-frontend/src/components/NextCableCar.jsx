import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const NextCableCar = () => {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    if (timer === 0) {
      setTimer(Math.trunc(Math.random() * 10 + 5));
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Paper sx={{ px: 10, py: 2 }}>
      <Stack direction="row">
        <Typography> Siguiente Cabina: </Typography>

        <Typography> {formatTime(timer)}</Typography>
      </Stack>
    </Paper>
  );
};
export default NextCableCar;
