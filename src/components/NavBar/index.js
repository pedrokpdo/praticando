import * as C from './styles'

export const NavBar = () => {
    return (
        <C.Container>
            <C.Logo>LOGO</C.Logo>
            <C.List>
                <li>Home</li>
                <li>Contato</li>
                <li>Galeria</li>
                <li>Donate</li>
            </C.List>
        </C.Container>
    )
}