import { useState } from "react"
import './products-page.css'
import { CategoryMenu } from "../category-menu/category-menu"

const ProductsPage = () => {
    const [allCollapsed, setAllCollapsed] = useState(false)

    const handleToggleAll = () => {
        setAllCollapsed(!allCollapsed)
    }
    return (

        <div className="main-container">
            {/* products page works */}
            <div className={`products-container${allCollapsed ? '-collapsed' : ''}`}>
                <div className="category-container">
                    <CategoryMenu isCollapsed={allCollapsed} onToggleAll={handleToggleAll} />
                </div>
            </div >
        </div>
    )
}




export { ProductsPage }