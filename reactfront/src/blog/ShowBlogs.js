// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Pagination from '@mui/material/Pagination';

// import BasicModal from '../blog/ModalProductoUnico';


// const URI = 'http://localhost:8000/blogs/';

// const CompShowBlogs = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const blogsPerPage = 5; // Customize entries per page
//     const totalPages = Math.ceil(blogs.length / blogsPerPage); // Calculate total pages
//     const [selectedBlog, setSelectedBlog] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         getBlogs();
//     }, []);

//     const getBlogs = async () => {
//         const res = await axios.get(URI);
//         setBlogs(res.data);
//     };

//     const deleteBlog = async (id) => {
//         await axios.delete(`${URI}${id}`);
//         getBlogs();
//     };

//     const handleOpenModal = (titulo, contenido) => {
//         setSelectedBlog({ titulo, contenido });
//     };

//     const handleCloseModal = () => {
//         setSelectedBlog(null);
//     };

//     const handleChangePage = (event, newPage) => {
//         setCurrentPage(newPage);
//     };

//     const slicedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

//     return (
//         <div className="container mb-8">
//             <div className="row ">
//                 <div className="col ">

//                     <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
//                         <Link to="/create">
//                             <a className="group relative inline-block focus:outline-none focus:ring " href="#">
//                                 <span
//                                     className=" absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
//                                 ></span>

//                                 <span
//                                     className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
//                                 >
//                                     Nuevo Post
//                                 </span>
//                             </a>                
//                         </Link>
//                     </span>
                  
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Title</th>
//                                 <th>Content</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {slicedBlogs.map((blog) => (
//                                 <tr key={blog.id}>
//                                     <td>{blog.titulo}</td>
//                                     <td>{blog.contenido}</td>
//                                     <td>
//                                         <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
//                                             <Link to={`/edit/${blog.id}`}> <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
//                                                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
//                                                 </svg>

//                                                 <span>Edit</span>
//                                             </button></Link>

//                                             <button onClick={() => deleteBlog(blog.id)} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
//                                                     <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
//                                                 </svg>

//                                                 <span>Drift</span>
//                                             </button>

//                                             <button onClick={() => handleOpenModal(blog.titulo, blog.contenido)} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
//                                                     <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                                 </svg>

//                                                 <span>View</span>
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
//                 </div>
//             </div>
//             <BasicModal
//                 titulo={selectedBlog?.titulo}
//                 contenido={selectedBlog?.contenido}
//                 onClose={handleCloseModal}
//             />
//         </div>
//     );
// };

// export default CompShowBlogs;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
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
            <div className="row">
                <div className="col">
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                        <Link to="/create">
                            <a className="group relative inline-block focus:outline-none focus:ring" href="#">
                                <span className=" absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                                    Nuevo Post
                                </span>
                            </a>
                        </Link>
                    </span>

                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {slicedBlogs.map((blog) => (
                            <div key={blog.id} className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                                <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                                    {blog.titulo}
                                </div>
                                <div className="col-span-2 rounded-md">
                                    {blog.contenido}
                                </div>
                                <div className="col-span-1">
                                    <Link to={`/edit/${blog.id}`}>
                                        <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
                                            {/* Icono de Editar */}
                                            <span>Edit</span>
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => deleteBlog(blog.id)}
                                        className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2 ml-2"
                                    >
                                        {/* Icono de Borrar */}
                                        <span>Delete</span>
                                    </button>

                                    <button
                                        onClick={() => handleOpenModal(blog.titulo, blog.contenido)}
                                        className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2 ml-2"
                                    >
                                        {/* Icono de Mostrar */}
                                        <span>Show</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

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
