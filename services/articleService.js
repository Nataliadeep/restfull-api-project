const db = require('../models');

const getAllArticles = async()=>{
    try{
        let Article = await db.Article.findAll({
        //con esta opcion permitimos mostrar los articulos con la informacion del ususario
        include: {
            model: db.User,
            required: true,
            as: "User",
            attibutes: ["id", "name", "email"],
        },
    });
    return Article;
 } catch(error){
       return error.message || "Faile to get Article";
    }
};

const getArticle = async(id)=>{
    try{
        let Article = await db.Article.findByPk(id)
        return Article
    }catch(error){
        throw {status: 500, message:  error.message || "Failed to get Article"}
    }
};

const createArticle = async (title, content, UserId )=>{
    try{
        const newArticle = await db.Article.create(
            {title,
            content,
            UserId
            });
        return newArticle;
    }catch(error){
        return error.message || "Article could not be created";
    }
};

const updateArticle = async (id, title, content, UserId)=>{
    try{
        let updateArticle = await db.Article.update(
            {title,content, UserId},
            {
                where:{
                    id,
                }
            });
        return updateArticle
    }catch(error){
        return error.message || "Article could not be updated";
    }
};

const deleteArticle = async (id) =>{
    try{
        const deleteArticle = await db.Article.destroy({
                where:{
                    id,
                }
            });
        return deleteArticle
    }catch(error){
        return error.message || "Article could not be deleted";
    }
};
module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};