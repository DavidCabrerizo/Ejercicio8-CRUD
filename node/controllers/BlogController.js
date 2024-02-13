//importar modelo
import BlogModel from "../models/BlogModel.js";

//**Metodos para el CRUD */

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
    } catch (error) {
        res.json({ error: error.message });

    }
}

//mostrar un registro

export const getBlog = async (req, res) => {
    try {
        BlogModel.findAll({
            where: { id: req.params.id }
        })
    } catch (error) {
        res.json({ error: error.message })
    }
}

//Crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "¡Registrado con exito!"
        })
    } catch (error) {
        res.json({ error: error.message })
    }
}

//Actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.send("Se actualizó el registro")
    } catch (error) {
        console.log(error);
        res.status(400).send("Error al actualizar");
    }
}

//Eliminar un registro

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            message: "El blog fue eliminado"
        })
    } catch (error) {
        res.json({ error: error.message })
    }
}


