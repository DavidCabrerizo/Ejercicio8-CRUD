import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicModal from '../blog/ModalProductoUnico';

const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {

    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    const [selectedBlog, setSelectedBlog] = useState(null);

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    // Abre el modal con la información del blog seleccionado
    const handleOpenModal = (titulo, contenido) => {
        setSelectedBlog({ titulo, contenido });
    };

    // Cierra el modal
    const handleCloseModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    {/* <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link> */}
                    <Link to="/create">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Box>
                    </Link>

                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.titulo} </td>
                                    <td> {blog.contenido} </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} >
                                            <Box sx={{ '& > :not(style)': { m: 1 } }}>

                                                <Fab color="secondary" aria-label="edit">
                                                    <EditIcon />
                                                </Fab>

                                            </Box>
                                        </Link>
                                        {/* <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button> */}


                                        <Link >
                                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                                <Fab color="success" aria-label="add">
                                                    <DeleteIcon onClick={() => deleteBlog(blog.id)} fontSize="inherit" />
                                                </Fab>
                                            </Box>
                                        </Link>

                                     
                                        <button onClick={() => handleOpenModal(blog.titulo, blog.contenido)}>
                                            Open Modal
                                        </button>
                                        <BasicModal
                                            titulo={selectedBlog?.titulo}
                                            contenido={selectedBlog?.contenido}
                                            onClose={handleCloseModal}
                                        />


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )

}

export default CompShowBlogs