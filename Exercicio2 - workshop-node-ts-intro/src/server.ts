import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'
import routes from './routes'
import cors from 'cors'

dotenv.config()
const app = express() //função que cria e devolve objeto do tipo express
const port = process.env.PORT || 3000 //Devolve as variáveis de ambiente. O Render preencherá no futuro
/*
'/exemplo' URL. Endpoint, rota. Só a barra é a raiz. Nome da rota. Rota, caminho que corresponde a algo
requisicao -> requisição
resposta -> resposta
Quem passa a requisição e a resposta é o express


//ROTA PADRÃO '/'
app.get('/',(requisicao,resposta) => {   
    resposta.send('Hello World!')
})

//CRIAÇÃO DE ROTA
app.get('/user',(requisicao,resposta) => {   
    resposta.send({id:1,name:"teste"})
})

app.listen(port,() => {
console.log(`Servidor rodando na porta: ${port}`)
})
*/

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
  console.log(`Banco de dados`, dataBase.isInitialized ? 'inicializado' : 'não inicializado')
})

app.use(express.json()) // habilita o express para receber dados no formato json
app.use(routes) // habilita as rotas
app.use(cors()) // habilita o CORS
