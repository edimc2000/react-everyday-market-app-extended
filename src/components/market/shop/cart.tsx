import { type IMerchandise } from '../models/merchandise'
import './cart.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


interface ICartContents {
    cartCounter: number
    cartItems: IMerchandise[]

}


function ViewCart({ cartCounter, cartItems }: ICartContents) {
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
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
                <h2>Your cart is empty</h2>
                <p>Redirecting to home page in 2 seconds...</p>
            </div>
        )
    }

    return (

        <>
            <span>{cartCounter} x 111 </span>


            <div className='main-container'>
                {cartItems.map((item) => (
                    <div key={item.id} className="order-container">

                        <div className="image-container"  >
                            <img className="image" src={item.imageUrl} />
                        </div>

                        <div className="order-details-container">
                            <span className= "brand">{item.brandName} | </span>
                            <span className= "cart-description">{item.item}</span>
                            <span className= "cart-long-description">{item.description}</span>
                        </div>

                        <div className='price-container cart-price'>
                            <span className='price1'>$</span>
                            <span className='price2'>{item.price.toFixed(0)}</span>
                            <span className='price1'>.{item.price.toFixed(2).split('.')[1]}</span>
                        </div>


                    </div>
                ))}
            </div>
        </>
    )

}






export { ViewCart }