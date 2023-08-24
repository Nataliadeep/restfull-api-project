/// creamos el router para poder usar los verbos HTTP
const {Router} = require('express');

//Incluimos nuestro controlador de usuario
const articleController = require('../../../controllers/articleController');
const router = Router(); // Llamamos al metodo Router de Express

//req => request => en request llegan los datos del body
//res => response => Se envia los datos hacia al cliente

router.get("/", articleController.getAllArticles);
router.get('/:articleId', articleController.getArticle);
router.post('/', articleController.createArticle);
router.put ('/:userId', articleController.updateArticle)
router.delete('/:userId', articleController.deleteArticle)

module.exports = router;



