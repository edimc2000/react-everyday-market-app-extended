import type { JSX } from "react"

interface CategoryItemProps {
    name: string
    imageUrl: string
    longDescription: string
    description: string
}


function OnCatSelected(props: CategoryItemProps): JSX.Element {
    const { name } = props
    
    function handleClick(categoryName: string) {
        console.log(`button clicked: ${categoryName}`)
    }

    return (
        <>
            <button onClick={() => handleClick(name)}> TESTING THIS BUTTON</button>
        </>
    )
}

const CategoryItem = (props: CategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description } = props
    return (
        <>
            <OnCatSelected {...props} />
            testing
            <span className="category-title">{name}</span>
            <img className="category-image" src={imageUrl} alt={description + ' image'} />
            <span className="category-longdesc">{longDescription}</span>
        </>
    )
}

export { CategoryItem }