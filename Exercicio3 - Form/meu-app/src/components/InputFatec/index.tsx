import styles from'./InputFatec.module.css'

interface Props{
    value: string,
    type: 'text',
    placeholder: string
}

function InputFatec({value, type, placeholder}: Props){
    return(
        <input className={styles.letraFatec} value={value} type={type} placeholder={placeholder}/>
        
    )
}

export default InputFatec