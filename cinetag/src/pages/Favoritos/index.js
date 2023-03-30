import Banner from "components/Banner"
import Titulo from "components/Titulo"
import styles from "./Favoritos.module.css"

function Favoritos () {
    return(
        <>
            <Banner imagem="favoritos" />
            <Titulo><h1>Meus Favoritos</h1></Titulo>
            <section className={styles.container}>

            </section>
        </>
    )
}

export default Favoritos