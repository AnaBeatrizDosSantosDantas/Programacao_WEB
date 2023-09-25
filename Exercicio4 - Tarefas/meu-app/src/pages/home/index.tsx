import Navbar from "../../components/Navbar";
export default function Home() {

  return (
    <>
    <Navbar/>
    <div style={{display:'grid', textAlign: "center", margin: "auto", paddingTop: "15%", width: "50%" }}>
      <h1>
        Sobre o nosso projeto:
      </h1>
      <p>Gerenciar tarefas é uma parte essencial da vida pessoal e profissional. 
        Um sistema eficiente de cadastro de tarefas pode simplificar a organização, 
        melhorar a produtividade e reduzir o estresse. Este projeto visa criar uma solução 
        de cadastro de tarefas abrangente e fácil de usar, que atenda às necessidades de 
        indivíduos e equipes.</p>
        <p>Este projeto de cadastro de tarefas visa simplificar a gestão de tarefas pessoais 
          e profissionais, promovendo maior produtividade e organização. Ao atender às necessidades 
          dos usuários por meio de uma abordagem cuidadosa de design e desenvolvimento, esperamos que o 
          sistema seja uma ferramenta valiosa para indivíduos e equipes, melhorando a qualidade de vida e 
          o desempenho no trabalho.</p>
      </div>
    </>
  )
}