import { useNavigate } from 'react-router-dom'
import { useEffect, type JSX } from 'react'

import { generateUPC } from '../models/merchandise'
import { Icons } from '../../../helpers/display-helper'
import { CartDisplay, type ICartContents } from '../../../helpers/cart-helper'
import './cart.css'



/**
 * ViewCart Component - AI Assisted Documentation
 * 
 * This component renders the shopping cart page with item display, 
 * quantity management, and automatic empty cart handling.
 * 
 * @component
 * @param {ICartContents} props - Cart state and state setters
 * @param {number} props.cartCounter - Total number of items in cart
 * @param {Function} props.setCartCounter - Setter for cartCounter
 * @param {ICartItem[]} props.cartItems - Array of cart items
 * @param {Function} props.setCartItems - Setter for cartItems
 * @returns {JSX.Element} Cart page component
 * 
 * @example
 * <ViewCart 
 *   cartCounter={cartCounter}
 *   setCartCounter={setCartCounter}
 *   cartItems={cartItems}
 *   setCartItems={setCartItems}
 * />
 */

const ViewCart = (
    { cartCounter, setCartCounter, cartItems, setCartItems }: ICartContents): JSX.Element => {

    const navigate = useNavigate()

    //AI was used on this code block to clear timeout and re-direct when the cart is empty 
    useEffect(() => {
        if (cartCounter === 0) {
            const timer = setTimeout(() => {
                navigate('/')
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [cartCounter, navigate])

    if (cartCounter === 0) {
        return (
            <div className='main-container'>
                <CartDisplay.renderCartEmptyMessage />
            </div>
        )
    }

    const DeleteCartItem = (id: number) => {
        const itemToRemove = cartItems.find(item => item.id === id)
        const quantityToRemove = itemToRemove?.quantity ?? 0
        setCartItems(prev => prev.filter(item => item.id !== id))
        setCartCounter(prev => prev - quantityToRemove)
    }


    return (
        <>
            <div className='main-container'>
                <CartDisplay.renderCartHeader />

                {cartItems.map((item) => (
                    <div key={item.id} className="order-container">
                        <div className="image-container"  >
                            <img className="image" src={item.imageUrl} />
                        </div>

                        <div className="order-details-container">
                            <span className="cart-upc">UPC{generateUPC(item.id)} </span>
                            <span className="brand">{item.brandName}</span>

                            <span className="cart-description">{item.item}</span>
                            <span className="cart-long-description">{item.description}</span>

                            <div className='qtty-container '>
                                <span className="qtty-container-text">Qtty:</span>
                                <span className="qtty">{item.quantity}</span>
                            </div>

                            <div
                                className='delete-container'
                                onClick={() => DeleteCartItem(item.id)}>
                                <svg xmlns="http://www.w3.org"
                                    viewBox="0 0 24 24"
                                    className='svg-delete'>
                                    <path d={Icons.deleteIcon} />
                                </svg>
                            </div>
                        </div>

                        <div className='price-container cart-price'>
                            <span className='price1 unit-price'>$</span>
                            <span className='price2 unit-price'>{item.price.toFixed(0)}</span>
                            <span className='price1 unit-price'>.{item.price.toFixed(2).split('.')[1]}</span>
                        </div>

                        <div className='price-container cart-price'>
                            <span className='price1'>$</span>
                            <span className='price2'>{(item.price * item.quantity!).toFixed(0)}</span>
                            <span className='price1'>.{(item.price * item.quantity!).toFixed(2).split('.')[1]}</span>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export { ViewCart }