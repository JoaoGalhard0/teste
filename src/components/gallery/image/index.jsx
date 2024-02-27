import { styled } from "styled-components"
import IconButton from "../../iconButton/index.jsx"



const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ photo, expandida = false, whenZoomRequested, onTuggleFavorite }) => {

    const favoriteIcon = photo.favorite ? '/icons/favorito-ativo.png' : '/icons/favorito.png'

    return (<Figure $expandida={expandida} id={`foto-${photo.id}`}>
        <img src={photo.path} alt={photo.alt} />
        <figcaption>
            <h3>{photo.titulo}</h3>
            <Rodape>
                <h4>{photo.fonte}</h4>
                <IconButton onClick={() => (onTuggleFavorite(photo))}>
                    <img src={favoriteIcon} alt="Icone de favorito" />
                </IconButton>
                {!expandida && 
                <IconButton aria-hidden={expandida} onClick={() => whenZoomRequested(photo)}>
                    <img src="/icons/expandir.png" alt="Icone de expandir" />
                </IconButton>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem