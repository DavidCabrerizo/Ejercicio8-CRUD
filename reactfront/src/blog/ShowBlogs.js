// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BasicModal from '../blog/ModalProductoUnico';

// const URI = 'http://localhost:8000/blogs/'


// const CompShowBlogs = () => {

//     const [blogs, setBlog] = useState([])
//     useEffect(() => {
//         getBlogs()
//     }, [])

//     const [selectedBlog, setSelectedBlog] = useState(null);

//     //procedimineto para mostrar todos los blogs
//     const getBlogs = async () => {
//         const res = await axios.get(URI)
//         setBlog(res.data)
//     }

//     //procedimineto para eliminar un blog
//     const deleteBlog = async (id) => {
//         await axios.delete(`${URI}${id}`)
//         getBlogs()
//     }

//     // Abre el modal con la información del blog seleccionado
//     const handleOpenModal = (titulo, contenido) => {
//         setSelectedBlog({ titulo, contenido });
//     };

//     // Cierra el modal
//     const handleCloseModal = () => {
//         setSelectedBlog(null);
//     };

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col'>

//                     {/* <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link> */}
//                     <Link to="/create">
//                         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//                             <Fab color="primary" aria-label="add">
//                                 <AddIcon />
//                             </Fab>
//                         </Box>
//                     </Link>

//                     <table className='table'>
//                         <thead className='table-primary'>
//                             <tr>
//                                 <th>Titulo</th>
//                                 <th>Contenido</th>
//                                 <th>Acciones</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {blogs.map((blog) => (
//                                 <tr key={blog.id}>
//                                     <td> {blog.titulo} </td>
//                                     <td> {blog.contenido} </td>
//                                     <td>
//                                         <Link to={`/edit/${blog.id}`} >
//                                             <Box sx={{ '& > :not(style)': { m: 1 } }}>

//                                                 <Fab color="secondary" aria-label="edit">
//                                                     <EditIcon />
//                                                 </Fab>

//                                             </Box>
//                                         </Link>
//                                         {/* <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button> */}


//                                         <Link >
//                                             <Box sx={{ '& > :not(style)': { m: 1 } }}>
//                                                 <Fab color="success" aria-label="add">
//                                                     <DeleteIcon onClick={() => deleteBlog(blog.id)} fontSize="inherit" />
//                                                 </Fab>
//                                             </Box>
//                                         </Link>


//                                         <button onClick={() => handleOpenModal(blog.titulo, blog.contenido)}>
//                                             Open Modal
//                                         </button>
//                                         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//                                                 <Fab color="success" aria-label="add">
//                                                     <DeleteIcon onClick={() => handleOpenModal(blog.titulo, blog.contenido)} fontSize="inherit" />
//                                                 </Fab>
//                                             </Box>
//                                         <BasicModal
//                                             titulo={selectedBlog?.titulo}
//                                             contenido={selectedBlog?.contenido}
//                                             onClose={handleCloseModal}
//                                         />


//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                 </div>
//             </div>
//         </div>
//     )

// }

// export default CompShowBlogs


import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicModal from '../blog/ModalProductoUnico';


const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5; // Customize entries per page
    const totalPages = Math.ceil(blogs.length / blogsPerPage); // Calculate total pages
    const [selectedBlog, setSelectedBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const res = await axios.get(URI);
        setBlogs(res.data);
    };

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        getBlogs();
    };

    const handleOpenModal = (titulo, contenido) => {
        setSelectedBlog({ titulo, contenido });
    };

    const handleCloseModal = () => {
        setSelectedBlog(null);
    };

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const slicedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <div className="container mb-8">
            <div className="row ">
                <div className="col ">

                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                        <Link to="/create">
                            <a className="group relative inline-block focus:outline-none focus:ring " href="#">
                                <span
                                    className=" absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                                >
                                    Nuevo Post
                                </span>
                            </a>                
                        </Link>
                    </span>
                    {/* <Link to="/create">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Box>
                    </Link> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slicedBlogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.titulo}</td>
                                    <td>{blog.contenido}</td>
                                    <td>
                                        <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                                            <Link to={`/edit/${blog.id}`}> <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                                </svg>

                                                <span>Edit</span>
                                            </button></Link>

                                            <button onClick={() => deleteBlog(blog.id)} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                                </svg>

                                                <span>Drift</span>
                                            </button>

                                            <button onClick={() => handleOpenModal(blog.titulo, blog.contenido)} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>

                                                <span>View</span>
                                            </button>
                                        </div>





                                        {/* <Link to={`/edit/${blog.id}`}>
                                            <Fab color="secondary" aria-label="edit">
                                                <EditIcon />
                                            </Fab>
                                        </Link>
                                        <IconButton onClick={() => deleteBlog(blog.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <button onClick={() => handleOpenModal(blog.titulo, blog.contenido)}>
                                            Open Modal
                                        </button> */}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                </div>
            </div>
            <BasicModal
                titulo={selectedBlog?.titulo}
                contenido={selectedBlog?.contenido}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default CompShowBlogs;
