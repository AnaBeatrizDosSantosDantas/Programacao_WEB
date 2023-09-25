import Navbar from "../../components/Navbar";

export default function Tarefas() {
    return (
        <body>
        <Navbar/>
        <div style={{display:'grid', textAlign: "center", margin: "auto", paddingTop: "15%", width: "50%" }}>
            <h1>Tarefas</h1>
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
            <li>Tarefa 3</li>
            <li>Tarefa 4</li>
        </div>
        </body>
    )
}