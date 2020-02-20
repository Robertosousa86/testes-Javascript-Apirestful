// inicializa o express router
let router = require('express').Router();
// configura o DEFAULT response(resposta)
router.get('/', function (req, res) {
    res.json({
        status: 'API funcionando',
        message: 'Bem-vindo ao API-restfull '
    });
});
// importa o contactController
var contactController = require('/Users/robertobatistadesousa/Documents/resthub/controller/contactController.js');
//rotas do contato
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
    
    router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// exporta a API routes
module.exports = router;