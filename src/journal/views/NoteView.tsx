import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
        <Grid item>
            <Typography sx={{fontSize: 39, fontWeight: 'light'}}>28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}></SaveOutlined>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
            fullWidth
            type="text"
            label="Titulo"
            placeholder='Ingresa un titulo'
            variant='filled'
            sx={{mb: 1}}
            >

            </TextField>
            <TextField
            fullWidth
            multiline
            minRows={5}
            type="text"
            label=""
            placeholder='Que fue lo que paso el dia de hoy?'
            variant='filled'
            sx={{mb: 1, border:'none'}}
            >
            </TextField>
        </Grid>

        <ImageGallery></ImageGallery>
    </Grid>
  )
}
