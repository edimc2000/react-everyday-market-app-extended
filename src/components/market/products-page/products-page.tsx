import './products-page.css'
import { categoryMenu } from "../category-menu/category-menu"

const ProductsPage = () => {
    return (

        <div className="main-container">
            {/* products page works */}
            <div className="products-container-expanded">
                <div className="category-container">
                    {categoryMenu}
                </div>
            </div >
        </div>
    )
}




export { ProductsPage }