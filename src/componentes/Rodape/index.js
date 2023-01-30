import './Rodape.css'

const Rodape = () =>{
    return(
        <section className='footer'>
            <div className='logos'>
                <img src="./imagens/fb.png" alt="Logo Facebook"/>
                <img src="./imagens/tw.png" alt="Logo Twitter"/>
                <img src="./imagens/ig.png" alt="Logo Instagram"/>
            </div>
            <div className='img'>
                <img src="./imagens/logo.png" alt="Logo Organo"/>
            </div>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>

        </section>
    )
}

export default Rodape
