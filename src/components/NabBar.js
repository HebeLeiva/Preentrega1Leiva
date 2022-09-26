import CartWidget from './CartWidget'



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