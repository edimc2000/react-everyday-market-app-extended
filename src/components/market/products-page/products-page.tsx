import { useState } from "react"
import './products-page.css'
import { CategoryMenu } from "../category-menu/category-menu"
import { FilteredBrands } from "../brands/brands"

const ProductsPage = () => {
    const [allCollapsed, setAllCollapsed] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleCollapseAll = (categoryName: string) => {
        setAllCollapsed(true)
        setSelectedCategory(categoryName)
    }
    return (
        <div className="main-container">
            {/* products page works */}
            <div className={`products-container${allCollapsed ? '-collapsed' : ''}`}>
                <div className={`category-container${allCollapsed ? '-collapse' : ''}`}>
                    <CategoryMenu isCollapsed={allCollapsed} onCollapseAll={handleCollapseAll} />
                </div>
            </div >

            <div className={allCollapsed ? 'brand-details' : 'brand-details-collapsed'}>
                <FilteredBrands category={selectedCategory} />
            </div>

        </div>
    )
}




export { ProductsPage }