import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {
 
 return (
    <>
        <p className='p'>
         Entre em contato: 
        </p>
        <hr/>
        <InputFatec value='Nome' type='text' placeholder='Nome'/><br/>
        <InputFatec value='E-mail' type='text' placeholder='E-mail'/><br/>
        <InputFatec value='Telefone' type='text' placeholder='Telefone'/><br/>
        <hr/>
     <ButtonFatec type='submit' label='Fatec: Enviar mensagem'/>
    </>
  )
}

export default App
