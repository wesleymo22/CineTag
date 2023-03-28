import Banner from "components/Banner"
import Cabecalho from "components/Cabecalho"
import Card from "components/Card"
import Rodape from "components/Rodape"
import Titulo from "components/Titulo"

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo="Teste" capa="https://github.com/wesleymo22.png"/>
            <Rodape />
        </>
    )
}

export default Inicio