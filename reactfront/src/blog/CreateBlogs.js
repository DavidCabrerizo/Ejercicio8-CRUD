import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { titulo: titulo, contenido: contenido })
        navigate('/')
    }

    return (
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField onChange={(e) => setTitulo(e.target.value)} id="outlined-basic" label="Titulo" variant="outlined" />

                    </Box>

                    {/* <label className='form-label'>Titulo</label>
                    <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        className='form-control'
                    /> */}
                </div>
                <div className='mb-3'>
                    <div>
                        <label for="OrderNotes" class="block text-sm font-medium text-gray-700"> Order notes </label>

                        <textarea
                            

                            id="OrderNotes"
                            class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                            rows="4"
                            placeholder="Enter any additional order notes..."
                            onChange={(e) => setContenido(e.target.value)}
                        ></textarea>
                    </div>

                    <Stack spacing={5} direction="row" justifyContent={'center'} marginTop={1} marginBottom={3}>
                        <Button type='submit' variant="contained">Subir el post</Button>
                    </Stack>
                </div>




            </form>
        </div>
    )
}

export default CompCreateBlog