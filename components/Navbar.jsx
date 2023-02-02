import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping, AiOutlineShoppingCart, AiOutlineNotification } from "react-icons/ai"
import { FaSistrix, FaBell } from 'react-icons/fa';
import {Cart} from "./"
import { useStateContext } from '../context/StateContext'
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities} = useStateContext()

  return (
    <div className="navbar-container">
      <button type="button" className="cart-icon">
        <FaBell/>
      </button>
        <p className="logo">
            <Link href="/">
              <img src='../Logo.svg' alt="logo" />
            </Link>
        </p>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart/>
            <span className="cart-item-qty">{totalQuantities}</span>

        </button>
        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar