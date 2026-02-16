import type { JSX } from 'react'
import { type ICartItem } from '../components/market/models/merchandise'


/**
 * Static component class for rendering cart UI elements
 * @class CartDisplay
 * @description Contains reusable cart display components as static methods
 */
export class CartDisplay {

    /**
    * Renders the cart table header with column labels
    * @static
    * @returns {JSX.Element} Header component with price columns
    */
    static renderCartHeader = (): JSX.Element => {
        return (
            <div className="order-container order-header">
                <div className="image-container" />
                <div className="order-details-container" />
                <div className="cart-header">Unit Price</div>
                <div className="cart-header">Item Sub-total</div>
            </div>
        )
    }

    /**
    * Displays empty cart message with redirect notification
    * @static
    * @returns {JSX.Element} Empty state component
    */
    static renderCartEmptyMessage = (): JSX.Element => {
        return (
            <div className="empty-cart">
                <span className="empty-cart-title">Your cart is empty</span>
                <span className="empty-cart-message">Redirecting to home page in 2 seconds...</span>
            </div>
        )
    }
}


/**
 * Cart state management interface with React setter patterns
 * @interface ICartContents
 * @property {number} id - Unique cart identifier
 * @property {number} cartCounter - Total items count in cart
 * @property {Function} setCartCounter - State setter for cartCounter (supports functional updates)
 * @property {ICartItem[]} cartItems - Array of cart items
 * @property {Function} setCartItems - State setter for cartItems (supports functional updates)
 */
export interface ICartContents {
    id?: number
    cartCounter: number
    setCartCounter: (value: number | ((prev: number) => number)) => void
    cartItems: ICartItem[]
    setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void
}




