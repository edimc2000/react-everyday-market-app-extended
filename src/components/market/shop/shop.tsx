import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, type JSX } from "react"

import { type IMerchandise, type ICartItem, generateUPC } from '../models/merchandise'
import { type IShopProps, ShopService } from '../../../helpers/shop-service'
import './shop.css'


/**
 * Shop Component Documentation
 * This renders merchandise grid filtered by URL parameters (cat, brand)
 * 
 * @component
 * @param {IShopProps} props - Cart state and setters
 * @returns {JSX.Element} Product grid with add-to-cart capability
 * 
 * @example
 * <Shop setCartCounter={setCartCounter} ... />
 */

const Shop = (
    { setCartCounter, cartItems, setCartItems }: IShopProps): JSX.Element => {

    const [availableMerch, setAvailableMerch] = useState<IMerchandise[]>([])
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)

    // read params on the URL 
    const category = searchParams.get('cat')
    const brand = searchParams.get('brand')

    useEffect(() => {
        if (category && brand) {
              const shopService = new ShopService()
            shopService.getFilteredMerch(category, brand)
                .then((merch) => {
                    setAvailableMerch(merch)
                })
                .finally(() => {
                    setLoading(false)
                })
        } 
    }, [category, brand])

    const AddToCart = (item: ICartItem) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id)

        // condition : if same id is already in the cart, just increase qtty 
        if (existingItem) {
            setCartItems(prev => prev.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity! + 1 }
                    : cartItem
            ))
        } else {
            setCartItems(prev => [...prev, { ...item, quantity: 1 }])
        }
        setCartCounter(prev => prev + 1)
    }



    if (loading) {
        return (
            <div className='loader-container'>
                <span className="loader"></span>
                <span className="loader-text">Loading</span>
            </div>
        )
    }

    return (
        <div className="main-container">
            {
                availableMerch.map((merch) => (
                    <div key={merch.id} className="merch-container">
                        <img className="category-image merch-image" src={merch.imageUrl} />

                        <div className='upc-container' >
                            <span className="upc" >UPC{generateUPC(merch.id)}</span>
                        </div>

                        <div className='merch-price-container '>
                            <button className="add-to-cart" onClick={() => AddToCart(merch)}>
                                Add to cart
                            </button>

                            <div className="price-container">
                                <span className="price1">$</span>
                                <span className="price2">
                                    {merch.price.toFixed(2).split('.')[0]}
                                </span>
                                <span className="price3">.{merch.price.toFixed(2).split('.')[1]}</span>
                            </div>
                        </div>

                        <span className="merch-brand">{merch.brandName}</span>
                        <span className="merch-longdesc">{merch.description}</span>
                    </div>
                ))
            }
        </div>

    )
}
export { Shop }