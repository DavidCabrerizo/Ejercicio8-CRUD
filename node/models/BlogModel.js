//importamos la conexion a la _BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    titulo: {type: DataTypes.STRING},
    contenido:{ type:DataTypes.STRING},
});

export default BlogModel;