import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import { type IMerchandise, type ICartItem, generateUPC } from '../models/merchandise'
import { type IShopProps, ShopService } from '../../../helpers/shop-service'
import './shop.css'


function Shop({ cartCounter, setCartCounter, cartItems, setCartItems }: IShopProps) {

    const [availableMerch, setAvailableMerch] = useState<IMerchandise[]>([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)


    const category = searchParams.get('cat')
    const brand = searchParams.get('brand')

    useEffect(() => {
        if (category && brand) {
            setLoading(true)
            const shopService = new ShopService()
            shopService.getFilteredMerch(category, brand)
                .then((merch) => {
                    setAvailableMerch(merch)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    }, [category, brand])




    useEffect(() => {
        if (cartCounter > 0) {
            console.log(`cart counter after adding = ${cartCounter}`)


            for (let index = 0; index < cartItems.length; index++) {
                const element = cartItems[index]
                console.log(`-----ELEMENT: ${element.description}-------`)

            }
        }
    }, [cartCounter])

    const AddToCart = (item: ICartItem) => {
        console.log(`cart counter before adding = ${cartCounter}`)
        
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
        
        if (existingItem) {
            console.log(`Item ID ${item.id} already in cart. Current quantity: ${existingItem.quantity}`)
            setCartItems(prev => prev.map(cartItem => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
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

        <>
            <div className="main-container">

                {
                    availableMerch.map((merch) => (
                        <div key={merch.id} className="merch-container">
                            <img className="category-image merch-image" src={merch.imageUrl} />
                           
                           <div className='upc-container' >
                            UPC {generateUPC(merch.id)}
                           </div>

                            
                            <div className='merch-price-container '>
                                <button className="add-to-cart" onClick={() => AddToCart(merch)}> Add to cart</button>

                                <div className="price-container">
                                    <span className="price1">$</span>
                                    <span className="price2">{merch.price.toFixed(0)}</span>
                                    <span className="price3">.{merch.price.toFixed(2).split('.')[1]}</span>
                                </div>
                            </div>
                            <span className="merch-brand">{merch.brandName}</span>
                            <span className="merch-longdesc">{merch.description}</span>




                        </div>
                    ))
                }
                {/* </div> */}
            </div>







        </>
    )

}




export { Shop }