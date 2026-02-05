import type { JSX } from "react"
import { CATEGORIES, type ICategory } from '../models/category'
import './category-menu.css'
import { CategoryItem } from "../category-menu-item/category-menu-item"

const categoryMenu: JSX.Element[] = CATEGORIES.map((category: ICategory) => {
    return (
        <div className="product-item" key={category.id}>
            <CategoryItem
                name={category.name}
                imageUrl={category.imageUrl}
                longDescription={category.longDescription}
                description={category.description} />
        </div>
    )
})

export { categoryMenu }