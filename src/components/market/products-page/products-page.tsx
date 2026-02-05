import { useState } from "react"
import './products-page.css'
import { CategoryMenu } from "../category-menu/category-menu"

const ProductsPage = () => {
    const [allCollapsed, setAllCollapsed] = useState(false)

    const handleCollapseAll = () => {
        setAllCollapsed(true)
    }
    return (
        <div className="main-container">
            {/* products page works */}
            <div className={`products-container${allCollapsed ? '-collapsed' : ''}`}>
                <div className={`category-container${allCollapsed ? '-collapse' : ''}`}>
                    <CategoryMenu isCollapsed={allCollapsed} onCollapseAll={handleCollapseAll} />
                </div>
            </div >

            <div className = "brand-details-collapsed">
                testing
            </div>

        </div>
    )
}




export { ProductsPage }