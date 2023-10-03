import AdicionarTarefa from "../../components/AdicionarTarefa";
import Layout from "../../components/Layout";
import Tarefa from "../../components/Tarefa";

export default function Produtos(){
    return(
       <Layout>
        <center><div>
                <h1>Lista de Tarefas</h1>
                <h2>Inserir nova tarefa</h2>
                <br/>
                <AdicionarTarefa/>
                <Tarefa label='Tarefa 1'/>
                <Tarefa label='Tarefa 2'/>
                <Tarefa label='Tarefa 3'/>
                </div></center>
        </Layout>
    )
}