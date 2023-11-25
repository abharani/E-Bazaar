import React ,{useContext, useState}from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

     const [menu,setMenu]= useState("shop");
     const {getTotalCartItems}=useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p> E-BAZAAR</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: 'inherit' }}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none', color:'inherit' }} to='/men'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button >Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>


        </div>
    )
}

export default Navbar