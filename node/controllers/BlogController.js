import BlogModel from "../models/BlogModel.js";

//**Metodos para el CRUD */

//Mostrar todos los registros

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
    } catch (error) {
        
    }
}



