//Servidor
const express = require('express') 
const server = express()

const{ pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configura nunjucks (templade engine)
const nunjucks = require('nunjucks') // importando o nunjucks apos instalado
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estaticos (cs, scripts, imagnes)
.use(express.static('public'))
//rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
//start do servidor
.listen(5500);
 
