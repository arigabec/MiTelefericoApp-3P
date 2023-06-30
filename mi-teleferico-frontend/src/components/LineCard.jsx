import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getFiles } from "../services/service";

const LineCard = ({line}) => {
    const [files, setFiles] = useState();

    const getData = async () => {

        const dataFiles = await getFiles();
        setFiles(dataFiles);


    }

    useEffect(()=>{
        getData();
    }, []);

    const getImage = (files, filename) => {
        if (files) {
            const url = "http://localhost:1337" + files.filter(file => file.name == filename)[0].url;
         //   console.log(url);
            return url;
        }
    }
    return (
        <>
            <Grid item xs={12} sm={2.4} >
                <Card display='flex' alignItems='center' onClick={() => showMe(line)}>
                    <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1} />
                        <Grid item xs={5}>
                            { line.attributes.logo && (
                                <CardMedia
                                    sx= {{width: 50, height: 50}}
                                    component="img"
                                    src={getImage(files, line.attributes.logo)} // Replace with the URL of your image
                                    alt="logo"
                                />
                            )}
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="div" gutterBottom sx={{mt: 1}}>
                            Línea {line.attributes.nombre}
                            </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
export default LineCard;