import CartWidget from './CartWidget'
import logo from './logo.png';




function NavBar () {
    
    return (
        <div>
        <img src='./logo.png'/>
        <ul>
            <li>Inicio</li>
            <li>Sobre Mi</li>
            <li>Contacto</li>
        </ul>
        <CartWidget />
        </div>
    )

}

export default NavBar;