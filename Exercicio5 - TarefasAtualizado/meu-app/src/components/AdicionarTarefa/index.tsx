import { Button, Checkbox, Input } from "@chakra-ui/react";
import styles from './AdicionarTarefa.module.css'

export default function AdicionarTarefa(){
    return (
        <>
        <Input className={styles.inputPersonalizado} placeholder='Digite o título da task' />
        <Checkbox className={styles.checkboxPersonalizado}>Realizada?</Checkbox>
        <Button colorScheme='blue'>Inserir</Button>
        <br/><br/>
        </>
    )
}
