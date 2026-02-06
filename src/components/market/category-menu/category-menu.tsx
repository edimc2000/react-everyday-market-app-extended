import { type JSX } from "react"
import { CATEGORIES, type ICategory } from '../models/category'
import { CategoryItem } from "../category-menu-item/category-menu-item"
import './category-menu.css'


interface ICategoryMenuProps {
    isCollapsed: boolean
    onCollapseAll: (categoryName: string) => void
}

/**
 * CategoryMenu Component
 * Renders a list of category items with collapsible styling
 * 
 * @component
 * @param {ICategoryMenuProps} props - Menu state and collapse handler
 * @returns {JSX.Element} List of interactive category items
 */
const CategoryMenu = ({ isCollapsed, onCollapseAll }: ICategoryMenuProps): JSX.Element => {

    return (
        <>
            {CATEGORIES.map((category: ICategory) => (
                <div className={isCollapsed ? 'product-item-collapsed' : 'product-item'} key={category.id}>
                    <CategoryItem
                        name={category.name}
                        imageUrl={category.imageUrl}
                        longDescription={category.longDescription}
                        description={category.description}
                        isCollapsed={isCollapsed}
                        onCollapseAll={onCollapseAll} />
                </div>
            ))}
        </>
    )
}

export { CategoryMenu }