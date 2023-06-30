import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const NextCableCar = () => {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    if (timer === -1) {
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
    <Paper sx={{ weight: 1, py: 2 }}>
      <Stack direction="column">
        <Box sx={{
            fontFamily: "sans-serif",
            textAlign: "center",
            fontWeight: 500,
            fontSize: 20,
            p: 1,
            mb: 1

          }}> Siguiente cabina en </Box>

        <Box
          sx={{
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,

          }}
        >
          {" "}
          {formatTime(timer)}
        </Box>
      </Stack>
    </Paper>
  );
};
export default NextCableCar;
