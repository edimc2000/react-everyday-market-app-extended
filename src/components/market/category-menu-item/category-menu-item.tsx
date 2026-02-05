import type { JSX } from "react"

interface CategoryItemProps {
    name: string
    imageUrl: string
    longDescription: string
    description: string
    isCollapsed: boolean
    onToggleAll: () => void
}


function OnCatSelected(props: CategoryItemProps): JSX.Element {
    const { name, imageUrl, longDescription, description, isCollapsed, onToggleAll } = props

    const classCategoryTitle = isCollapsed ? 'category-title-collapsed' : 'category-title'
    const classImage = isCollapsed ? 'category-image-collapsed' : 'category-image'
    const classDescription = isCollapsed ? 'category-longdesc-collapsed' : 'category-longdesc'

    return (
        <>
            <button onClick={onToggleAll}> TOGGLE ALL</button>
            <span className={classCategoryTitle}>{name}</span>
            <img className={classImage} src={imageUrl} alt={description + ' image'} />
            <span className={classDescription}>{longDescription}</span>
        </>
    )
}

const CategoryItem = (props: CategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description, isCollapsed, onToggleAll } = props
    return (
        <>
            <OnCatSelected
                name={name}
                imageUrl={imageUrl}
                longDescription={longDescription}
                description={description}
                isCollapsed={isCollapsed}
                onToggleAll={onToggleAll} />

            {/* <span className="category-title">{name}</span>
            <img className="category-image" src={imageUrl} alt={description + ' image'} />
            <span className="category-longdesc">{longDescription}</span> */}
        </>
    )
}

export { CategoryItem }