import Card from "components/Card"
import Titulo from "components/Titulo"
import videos from "json/db.json"
import styles from "./Inicio.module.css"

function Inicio() {
    return (
        <>
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio