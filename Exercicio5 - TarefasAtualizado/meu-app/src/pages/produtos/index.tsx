import AdicionarTarefa from "../../components/AdicionarTarefa";
import Layout from "../../components/Layout";
import Tarefa from "../../components/Tarefa";

export default function Produtos(){
    return(
       <Layout>
           <h1>Produtos</h1>
            <p>Na era moderna, a busca por produtos de qualidade
                se tornou uma prioridade para consumidores exigentes
                que valorizam o seu dinheiro e o meio ambiente. Aqui,
                na nossa loja virtual, estamos comprometidos em oferecer
                uma vasta gama de produtos cuidadosamente selecionados
                para atender às suas necessidades e superar as suas
                expectativas.</p>
            <hr />
            <h2>Diversidade e Variedade</h2>
            <p>Nossa equipe de especialistas em produtos se dedica a pesquisar
                e escolher produtos de alta qualidade em diversas categorias.
                Seja você um entusiasta de tecnologia, um amante da moda, um gourmet
                culinário ou um aficionado por produtos para a casa, temos algo especial
                para você. Navegue por nossas categorias para encontrar produtos inovadores
                e confiáveis que podem aprimorar a sua vida.</p>
            <hr />
            <h2>Qualidade Intransigente</h2>
            <p>Comprometemo-nos a oferecer produtos de qualidade intransigente. Trabalhamos com marcas
                respeitadas e cuidadosamente selecionamos cada item em nosso catálogo para garantir que você
                obtenha o melhor em termos de durabilidade, desempenho e design. A qualidade é nossa prioridade,
                e isso se reflete em cada produto que oferecemos.</p>
            <hr />
            <h2>Sustentabilidade Ambiental</h2>
            <p>Nosso compromisso com a sustentabilidade é inabalável. Priorizamos produtos que são fabricados de
                maneira responsável, usando materiais e processos que minimizam o impacto ambiental. Ao escolher
                produtos da nossa loja, você está contribuindo para um futuro mais verde e sustentável.</p>
                <br/>
                <h1>Lista de Tarefas</h1>
                <h2>Inserir nova tarefa</h2>
                <AdicionarTarefa/>
                <Tarefa label='Tarefa 1'/>
                <Tarefa label='Tarefa 2'/>
                <Tarefa label='Tarefa 3'/>
        </Layout>
    )
}