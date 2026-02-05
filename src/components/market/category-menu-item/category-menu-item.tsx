import { useState, type JSX } from "react"

interface CategoryItemProps {
    name: string
    imageUrl: string
    longDescription: string
    description: string
}


function OnCatSelected(props: CategoryItemProps): JSX.Element {
    const { name, imageUrl, longDescription, description } = props

    const [isCollapsed, setIsCollapsed] = useState(false)

    function handleClick(categoryName: string) {
        console.log(`button clicked: ${categoryName}`)
        console.log(`before toggle: ${isCollapsed}`)
        setIsCollapsed(!isCollapsed)
        console.log(`after toggle will be: ${!isCollapsed}`)
    }

    const classCategoryTitle = isCollapsed ? 'category-title-collapsed' : 'category-title'
    const classImage = isCollapsed ? 'category-image-collapsed' : 'category-image'
    const classDescription = isCollapsed ? 'category-longdesc-collapsed' : 'category-longdesc'

    return (
        <>
            <button onClick={() => handleClick(name)}> TESTING THIS BUTTON</button>
            <span className={classCategoryTitle}>{name}</span>
            <img className={classImage} src={imageUrl} alt={description + ' image'} />
            <span className={classDescription}>{longDescription}</span>
        </>
    )
}

const CategoryItem = (props: CategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description } = props
    return (
        <>
            <OnCatSelected {...props} />

            {/* <span className="category-title">{name}</span>
            <img className="category-image" src={imageUrl} alt={description + ' image'} />
            <span className="category-longdesc">{longDescription}</span> */}
        </>
    )
}

export { CategoryItem }