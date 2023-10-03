import { Box } from "@chakra-ui/react";
import styles from './Tarefa.module.css'

interface Props {
  label: string
}

export default function Tarefa({ label }: Props) {
  return (
    <>
      <Box className={styles.boxPersonalizado} w='100%' p={4} color='black'>
        {label}
        <Box className={styles.buttonPendente} as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
          Pendente
        </Box>
        <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
          Excluir
        </Box>
      </Box>
      <br />
      </>
  )
}