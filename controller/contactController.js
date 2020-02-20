//importa o modelo de contato(contractModel.js)
Contact = require('/Users/robertobatistadesousa/Documents/resthub/models/contactModel.js');
// manipula as ações do index
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: 'erro',
                message: err,
            });
        }
        res.json({
            status: 'sucesso',
            message: 'contatos atribuidos corretamente',
            data: contacts
        });
    });
};
//manipula a criação de ação de contatos
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    // salva o  contato e verifica os erros
    contact.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'novo contato criado!',
            data: contact
        });
    });
};
// manipula as informações de contatos
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes do contato carregando...',
            data: contact
        });
    });
};
// manipula as alterações no contato
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        // salva o contato e verifica se há erros
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Alterações no contato salvas',
                data: contact
            });
        });
    });
};
// manipula a exclução do contato
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contato deletado'
        });
    });
};