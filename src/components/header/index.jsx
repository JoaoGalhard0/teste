import styled from "styled-components"
import TextField from "../../textField"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = () => {
    return (<HeaderStyled>
        <img src="/imagens/logo.png" alt="" />
        <TextField placeholder="O que voce quer pesquisar?"/>
    </HeaderStyled>)
}

export default Header