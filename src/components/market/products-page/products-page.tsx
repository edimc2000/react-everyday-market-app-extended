import { useState } from "react"
import { CategoryMenu } from "../category-menu/category-menu"
import { FilteredBrands } from "../brands/brands"
import './products-page.css'

/**
 * Products Page Component
 * Main product browsing interface with collapsible category menu
 * 
 * @component
 * @returns {JSX.Element} Two-pane layout with category menu and brand filters
 */
const ProductsPage = () => {
    const [allCollapsed, setAllCollapsed] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')


    /**
    * Collapses category menu and sets active category
    * @param categoryName - Selected category name
    */
    const handleCollapseAll = (categoryName: string) => {
        setAllCollapsed(true)
        setSelectedCategory(categoryName)
    }

    return (
        <div className="main-container">

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