import styles from './Frase.modules.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Esse componente é uma frase</p>
        </div>
    )
}
export default Frase