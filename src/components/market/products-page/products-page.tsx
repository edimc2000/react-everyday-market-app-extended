// import type { JSX } from "react"
import { CATEGORIES, type ICategory } from "../models/category"

import './products-page.css'

const categoryComponents = CATEGORIES.map((category) => {

    console.log(` category: ${category} `)

    return (
        <div className="product-item">
            <span className="category-title">{category.name}</span>
            <img className="category-image" src={category.imageUrl} alt={category.description + ' image'} />
            <span className="category-longdesc">{category.longDescription}</span>
        </div>
    )

})




const ProductsPage = () => {

    console.log(`------- ${categoryComponents}`)
    return (

        <div className="main-container">
            {/* products page works */}
            <div className="products-container-expanded">
                <div className="category-container">
                    {categoryComponents}
                </div>
            </div >
        </div>


    )
}




export { ProductsPage }