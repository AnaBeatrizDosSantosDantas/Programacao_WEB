import { Link } from "react-router-dom";
import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";
import Navbar from "../../components/Navbar";

export default function Contato() {

  return (
    <>
    <Navbar/>
    <div style={{textAlign: "center", margin: "auto", paddingTop: "15%", width: "15%" }}>
      <p className='p'>
        Entre em contato:
      </p>
      <hr />
      <InputFatec value='Nome' type='text' placeholder='Nome' /><br />
      <InputFatec value='E-mail' type='text' placeholder='E-mail' /><br />
      <InputFatec value='Telefone' type='text' placeholder='Telefone' /><br />
      <hr />
      <ButtonFatec type='submit' label='Fatec: Enviar mensagem' />

      </div>
    </>
  )
}

