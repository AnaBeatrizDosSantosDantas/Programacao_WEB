import Layout from "../../components/Layout"
import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";


export default function Contato() {

  return (
    
    <Layout>
   <center><div>
      <p className='p'>
        Entre em contato:
      </p>
      <InputFatec value='Nome' type='text' placeholder='Nome' /><br/>
      <InputFatec value='E-mail' type='text' placeholder='E-mail' /><br/>
      <InputFatec value='Telefone' type='text' placeholder='Telefone' /><br/>
      <ButtonFatec type='submit' label='Fatec: Enviar mensagem' />
      </div></center>

    </Layout>
  )
}

