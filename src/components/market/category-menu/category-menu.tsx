import type { JSX } from "react"
import { CATEGORIES, type ICategory } from '../models/category'
import './category-menu.css'
import { CategoryItem } from "../category-menu-item/category-menu-item"

interface CategoryMenuProps {
    isCollapsed: boolean
    onCollapseAll: (categoryName: string) => void
}

const CategoryMenu = ({ isCollapsed, onCollapseAll }: CategoryMenuProps): JSX.Element => {

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