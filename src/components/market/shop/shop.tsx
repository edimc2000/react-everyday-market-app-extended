import { merchandiseItems, type IMerchandise } from '../models/merchandise'
import './shop.css'
import { useSearchParams } from 'react-router-dom'

function Shop() {
    const [searchParams, setSearchParams] = useSearchParams()

    const category = searchParams.get('cat')
    const brand = searchParams.get('brand')

    const filteredMerch: IMerchandise[] = merchandiseItems.filter(
        merch => merch.brandName.toLowerCase() === brand
            && merch.type.toLowerCase() === category?.toLowerCase()
    )

    return (

        <>
            {console.log(`merch filtered count: ${filteredMerch.length}`)}
            {category} {brand}

            <div className="main-container">

                {
                    filteredMerch.map((merch) => (
                        <div key={merch.id} className="merch-container">
                            <img className="category-image" src={merch.imageUrl} />
                            {console.log(merch.imageUrl)}
                            <div className='merch-price-container '>
                                <button className="add-to-cart"> Add to cart</button>

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