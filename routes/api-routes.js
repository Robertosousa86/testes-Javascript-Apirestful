// inicializa o express router
let router = require('express').Router();
// configura o DEFAULT response(resposta)
router.get('/', function(req,res ){
    res.json({
        status: 'API funcionando',
        message: 'Bem-vindo ao API-restfull e nodemon'
    });
});
// exporta a API routes
module.exports = router;