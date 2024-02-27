import styled from "styled-components"
import ItemNavigaton from "./itemNavigation"


const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`


const SideBar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <ItemNavigaton iconeAtivo="/icons/home-ativo.png" iconeInativo="/icons/home-inativo.png" ativo={true}>
                        Inicio
                    </ItemNavigaton>
                    <ItemNavigaton iconeAtivo="/icons/mais-vistas-ativo.png" iconeInativo="/icons/mais-vistas-inativo.png">
                        Mais vistas
                    </ItemNavigaton>
                    <ItemNavigaton iconeAtivo="/icons/mais-curtidas-ativo.png" iconeInativo="/icons/mais-curtidas-inativo.png">
                        Mais curtidas
                    </ItemNavigaton>
                    <ItemNavigaton iconeAtivo="/icons/novas-ativo.png" iconeInativo="/icons/novas-inativo.png">
                        Novas
                    </ItemNavigaton>
                    <ItemNavigaton iconeAtivo="/icons/surpreenda-me-ativo.png" iconeInativo="/icons/surpreenda-me-inativo.png">
                        Surpreenda-me
                    </ItemNavigaton>
                </StyledList>
            </nav>

        </aside>
    )
}

export default SideBar