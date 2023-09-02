//ARQUIVO RESPONSÁVEL POR CONECTAR NO BANCO DE DADOS
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { join } from "path"

dotenv.config()

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './src/database/database.sqlite',
    entities: [
      join(__dirname, '..', 'models/*.{ts,js}')
    ],
    logging: true,
    synchronize: true
  })

dataBase.initialize()
.then(() => {
    console.log('Banco de dados conectado com sucesso!')
})
.catch((erro)=>{
    console.log('Erro ao conectar o banco: ', erro)
})


export default dataBase