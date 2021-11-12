import { Container } from "./styles";
import Logo from "../../assets/logo.png"
import Search from "../../assets/search-icon.png"
import Shop from "../../assets/shop-icon.png"

const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="Logo"/>
            <div className='mid-header'>
                <a href='#'>JOGOS</a>
                <a href='#'>CATEGORIAS</a>
                <a href='#'>PUBLISHERS</a>
            </div>
            <div className='right-header'>
                <img src={Search} alt='Search Icon'/>
                <img src={Shop} alt='Shop Icon'/>
            </div>
        </Container>
    );
}

export default Header