import { Grid, Container, Typography, Select, MenuItem, FormControl, Paper, Button } from "@mui/material";
import SuggestionPage from "./SuggestionPage";
import { useEffect, useState } from "react";
import { getLineas } from "../services/service";
import LineCard from "../components/LineCard";

const SearchPage = () => {
    const [response, setResponse] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isContainerVisible, setContainerVisible] = useState(false);

    const handleOptionChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      getZones(searchResults);
    };

    const getZones = (searchResults) => {
      if (response && searchResults) {
        const results = response.data.filter(line => {
          if (line.attributes.zona === searchTerm) {
            return line;
          }
        });
        setContainerVisible(true);
        setSearchResults(results);
        console.log(results);
      }
    }
    const getData = async () => {
        const dataLineas = await getLineas();
        setResponse(dataLineas);
    };

    useEffect(()=>{
        getData();
    }, []);

  return (
    <Container sx={{ 
      width: 1,
      height: 1,
      mt: 2, 
      px: 2 
    }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={20} sx={{ borderRadius: 12, p: 5, mt: 5 }}>
            <Typography variant="h5" gutterBottom sx={{mb: 2}} fontWeight={700}>
              Búsqueda por zonas
            </Typography>
            <Typography variant="h6" gutterBottom sx={{mb: 3}}>
              Selecciona una zona:
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <FormControl sx={{width: 200}}>
                <Select
                  labelId="dropdown-label"
                  value={searchTerm}
                  onChange={handleOptionChange}
                >
                  <MenuItem value="Central"> Central </MenuItem>
                  <MenuItem value="Sur"> Sur </MenuItem>
                  <MenuItem value="Norte"> Norte </MenuItem>
                  <MenuItem value="El Alto"> El Alto </MenuItem>
                </Select>
                <Button type="submit" variant="contained" color="secondary"sx={{mt: 2}} >
                  Buscar
                </Button>
              </FormControl>
            </form>
            {isContainerVisible && ( 
              <Grid container spacing={1.5} sx={{mt:2}}>
                {
                  searchResults.map(line => <LineCard line={line}/>)
                }
              </Grid>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <SuggestionPage/>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SearchPage;
