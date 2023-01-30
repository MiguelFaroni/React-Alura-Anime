import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {
      

    const [nome , setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem , setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,cargo,imagem,time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar sua tier list de animes!</h2>

                <CampoTexto obrigatorio={true} label="Titulo" placeholder="Digite o titulo do anime" 
                valor={nome} aoAlterado = {valor => setNome(valor)} />

                <CampoTexto obrigatorio={true} label="Gênero" placeholder="Digite o gênero do anime" 
                valor={cargo} aoAlterado = {valor => setCargo(valor)} />

                <CampoTexto label="Imagem" placeholder="Digite um link de imagem" 
                valor = {imagem} aoAlterado = {valor => setImagem(valor)} />

                <ListaSuspensa obrigatorio={true} label="Rank" itens={props.times}
                valor = {time} aoAlterado = {valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario