import type { JSX } from 'react'
import { type ICartItem } from '../components/market/models/merchandise'


export class CartDisplay {
    static CartHeader = (): JSX.Element => {
        return (

            <div className="order-container order-header">
                <div className="image-container" />
                <div className="order-details-container" />
                <div className="price-container cart-header">Unit Price</div>
                <div className="price-container cart-header">Sub-total</div>
            </div>

        )
    }

    static CartEmptyMessage = (): JSX.Element => {
        return (

            <div className="empty-cart">
                <span className="empty-cart-title">Your cart is empty</span>
                <span className="empty-cart-message">Redirecting to home page in 2 seconds...</span>
            </div>

        )
    }

    static DeleteCartItem = (id: number, cartItems: ICartItem[], setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void, setCartCounter: (value: number | ((prev: number) => number)) => void) => {
        const itemToRemove = cartItems.find(item => item.id === id)
        const quantityToRemove = itemToRemove?.quantity ?? 0
        setCartItems(prev => prev.filter(item => item.id !== id))
        setCartCounter(prev => prev - quantityToRemove)
    }

}


export interface ICartContents {
    id: number
    cartCounter: number
    setCartCounter: (value: number | ((prev: number) => number)) => void
    cartItems: ICartItem[]
    setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void
}




