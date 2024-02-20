import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            titulo: titulo,
            contenido: contenido
        })
        navigate('/')
    }

    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setTitulo(res.data.titulo)
        setContenido(res.data.contenido)
    }

    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                {/* <div className="mb-3">
                <label  className="form-label">Contenido</label>
                <textarea
                    value={contenido}
                    onChange={ (e)=> setContenido(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>*/}

                <div className='mb-3'>
                    <div>
                        <label for="OrderNotes" class="block text-sm font-medium text-gray-700"> Order notes </label>

                        <textarea
                            onChange={(e) => setContenido(e.target.value)}
                            id="OrderNotes"
                            className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                            rows="4"
                            placeholder="Enter any additional order notes..."
                        ></textarea>
                    </div>


                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )

}

export default CompEditBlog