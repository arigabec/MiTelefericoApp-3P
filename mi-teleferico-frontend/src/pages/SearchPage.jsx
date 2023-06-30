import { Box, Grid, Paper, Stack } from "@mui/material";
import SuggestionPage from "./SuggestionPage";
import { useEffect, useState } from "react";
import { getLineas } from "../services/service";
import LineCard from "../components/LineCard";

const SearchPage = () => {
    const [response, setResponse] = useState();
    const [files, setFiles] = useState();
    

    const getData = async () => {
        const dataLineas = await getLineas();
        setResponse(dataLineas);

        
    }

    useEffect(()=>{
        getData();
    }, []);

    

   
  return (
    <Stack direction="row">
      <Stack direction="column">
        <Paper>Buscar</Paper>
        <Paper>
        <Grid container spacing={2}>
            {
                response && response.data.map((line => line.attributes.zona === 'Central'  &&
                    <LineCard line={line}/>))
            }
            </Grid>
        </Paper>
      </Stack>
      <SuggestionPage/>
    </Stack>
  );
};
export default SearchPage;
