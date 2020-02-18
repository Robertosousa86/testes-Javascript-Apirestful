// faz o import do express
let express = require('express');
//inicializa o aplicativo
let app = express();
// porta do servidor de configuração
var port = process.env.PORT || 8080;
//envia mensagem para o URL padrão
app.get('/', (req, res) => res.send('hello express'));
// inicia o aplicativo para "escutar" a porta espeficicada
app.listen(port, function () {
    console.log('Executa o resthub na porta: ' + port);
});
// impota a rota
let apiRoutes = require('/Users/robertobatistadesousa/Documents/resthub/routes/api-routes.js');
// Usa a Api routes no app
app.use('/api', apiRoutes);
