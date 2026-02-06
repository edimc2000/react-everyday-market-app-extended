import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { type ICartItem, generateUPC } from '../models/merchandise'
import { Icons } from '../../../helpers/helper'
import { CartDisplay } from '../../../helpers/static-components'
import './cart.css'

interface ICartContents {
    id: number
    cartCounter: number
    setCartCounter: (value: number | ((prev: number) => number)) => void
    cartItems: ICartItem[]
    setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void
}

function ViewCart({ cartCounter, setCartCounter, cartItems, setCartItems }: ICartContents) {
    const navigate = useNavigate()

    //AI was used on this code to clear time out and re direct when empty 
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
                <CartDisplay.CartEmptyMessage />
            </div>
        )
    }

    // function DeleteCartItem(id: number) {
    const DeleteCartItem = (id: number)=> {
        const itemToRemove = cartItems.find(item => item.id === id)
        const quantityToRemove = itemToRemove?.quantity ?? 0
        setCartItems(prev => prev.filter(item => item.id !== id))
        setCartCounter(prev => prev - quantityToRemove)
    }

    return (
        <>
            <div className='main-container'>
                <CartDisplay.CartHeader />

                {cartItems.map((item) => (
                    <div key={item.id} className="order-container">
                        <div className="image-container"  >
                            <img className="image" src={item.imageUrl} />
                        </div>

                        <div className="order-details-container">
                            <span className="cart-upc">UPC {generateUPC(item.id)} </span>
                            <span className="brand">{item.brandName}</span>

                            <span className="cart-description">{item.item}</span>
                            <span className="cart-long-description">{item.description}</span>

                            <div className='qtty-container '>
                                <span className="qtty-container-text">Qtty:</span>
                                <span className="qtty">{item.quantity}</span>
                            </div>

                            <div className='delete-container' onClick={() => DeleteCartItem(item.id)}>
                                <svg xmlns="http://www.w3.org"
                                    viewBox="0 0 24 24"
                                    className='svg-delete'>
                                    <path d={Icons.deleteIcon} />
                                </svg>

                            </div>

                        </div>

                        <div className='price-container cart-price'>
                            <span className='price1'>$</span>
                            <span className='price2'>{item.price.toFixed(0)}</span>
                            <span className='price1'>.{item.price.toFixed(2).split('.')[1]}</span>
                        </div>

                        <div className='price-container cart-price'>
                            <span className='price1'>$</span>
                            <span className='price2'>{(item.price * item.quantity).toFixed(0)}</span>
                            <span className='price1'>.{(item.price * item.quantity).toFixed(2).split('.')[1]}</span>
                        </div>


                    </div>
                ))}
            </div>
        </>
    )

}






export { ViewCart }