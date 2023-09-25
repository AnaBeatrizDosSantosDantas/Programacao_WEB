import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

export default function InputFatec() {
    return (
        <>
        <div className={styles.nav}>
            <p className={styles.title}>Navbar</p>
            <Link to='/'>Home</Link><br />
            <Link to='/sobre'>Sobre</Link><br />
            <Link to='/contato'>Contato</Link><br />
            <Link to='/tarefas'>Tarefas</Link><br />
        </div>
        </>
    )
}
