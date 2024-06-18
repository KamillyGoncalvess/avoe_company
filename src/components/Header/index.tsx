import imagem from '../../images/ativos/image.png'
import logo from '../../images/ativos/LOGOTIPO/12.png'
import { Container, HeaderDiv, Button } from './styles'

export function Header() {
  return (
    <Container>
        <HeaderDiv>
            <img src={logo} alt="Logo"/>
            <a href="https://wa.me/554135682706?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20viagens" target="_blank" rel="noopener noreferrer">
              <Button>Contato</Button>
            </a>
        </HeaderDiv>
        <img src={imagem} alt="Avoe"/>
    </Container>
  )
}