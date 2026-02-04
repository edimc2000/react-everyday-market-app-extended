import type { JSX } from "react"

interface CategoryItemProps {
    name: string
    imageUrl: string
    longDescription: string
    description: string
}

const CategoryItem = (props: CategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description} = props
    return (
        <>
            <span className="category-title">{name}</span>
            <img className="category-image" src={imageUrl} alt={description + ' image'} />
            <span className="category-longdesc">{longDescription}</span>
        </>
    )
}

export { CategoryItem }