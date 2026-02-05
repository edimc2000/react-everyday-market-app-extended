import { type IMerchandise } from '../models/merchandise'
import './cart.css'


interface ICartContents {
    cartCounter: number
    cartItems: IMerchandise[]

}


function ViewCart({ cartCounter, cartItems }: ICartContents) {

    return (

        <>
            <span>{cartCounter}</span>
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