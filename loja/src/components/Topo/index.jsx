import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div class="anuncio">
                <div class="anuncio-conteudo">
                    <span>Tudo em 10x sem juros!</span>
                    <span>Tudo em 10x sem juros!</span>
                    <span>Tudo em 10x sem juros!</span>
                    <span>Tudo em 10x sem juros!</span>
                    <span>Tudo em 10x sem juros!</span>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src='./logoLoja.png' />
                    </a>
                </picture>

                <nav>
                    <a href='#'>Home</a>
                    <a href='#'>Produtos</a>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Contatos</a>
                </nav>
            </div>
        </header>
    )
}