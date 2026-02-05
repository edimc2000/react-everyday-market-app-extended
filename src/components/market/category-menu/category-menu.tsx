import type { JSX } from "react"
import { CATEGORIES, type ICategory } from '../models/category'
import './category-menu.css'
import { CategoryItem } from "../category-menu-item/category-menu-item"

interface CategoryMenuProps {
    isCollapsed: boolean
    onToggleAll: () => void
}

const CategoryMenu = ({ isCollapsed, onToggleAll }: CategoryMenuProps): JSX.Element => {

    return (
        <>
            {CATEGORIES.map((category: ICategory) => (
                <div className={`product-item${isCollapsed ? ' product-item-collapsed' : ''}`} key={category.id}>
                    <CategoryItem
                        name={category.name}
                        imageUrl={category.imageUrl}
                        longDescription={category.longDescription}
                        description={category.description}
                        isCollapsed={isCollapsed}
                        onToggleAll={onToggleAll} />
                </div>
            ))}
        </>
    )
}

export { CategoryMenu }