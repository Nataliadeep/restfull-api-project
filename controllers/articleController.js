const Articleservice = require('../services/articleService');

const getAllArticles = async(req,res)=>{
    try{
        const  allArticles = await  articleservice.getAllArticles();
        res.status(200).send({status:'OK', data: allArticles})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const getArticle = async (req, res) => {
    let id = req.params.artcleId;
    try {
        const Article = await articleservice.getArticle(id);
        res.status(200).send({ status: "OK", data: Article});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data:{ error:error.message} });
    }
}

const createArticle = async (req,res)=>{
    try{
        const {body} = req
        const createArticle = await articleservice.createArticle(body.title, body.content, body.UserId,);
        res.status(201).send({status: 'OK', data:createArticle})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const updateArticle = async (req, res)=>{
    try{
        const id = req.params.userId
        let {title, content, UserId} = req.body;
        const updateArticle = articleservice.updateArticle(id, title, content,UserId)
        res.status(200).send({status: 'OK', data:updateArticle})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}
const deleteArticle = async (req, res)=>{
    try{
        const id = req.params.ArticleId
        const deleteArticle = articleservice.deleteArticle(id)
        res.status(200).send({status: 'OK', data:deleteArticle})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}
