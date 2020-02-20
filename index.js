// faz o import do express
let express = require('express');
//  impota o body parser
let bodyParser = require('body-parser');
// imomrta o mangoose 
let mongoose = require('mongoose');
//inicializa o aplicativo
let app = express();
// impota as rotas
let apiRoutes = require('/Users/robertobatistadesousa/Documents/resthub/routes/api-routes.js')
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://robertosousa:betojuba11@resthubdb-7mqaa.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
var db = mongoose.connection;
// verifica se está conectado
if (!db)
    conlose.log('Erro ao conectar!')
else
    console.log('conecção bem sucedida!')
    // porta do servidor de configuração
    var port = process.env.PORT || 8080;
//envia mensagem para o URL padrão
app.get('/', (req, res) => res.send('hello express e mongodb!'));
//usa as rotas da api no App
app.use('/api', apiRoutes);
// inicia o aplicativo para "escutar" a porta espeficicada
app.listen(port, function () {
    console.log('Executa o resthub na porta: ' + port);
});
