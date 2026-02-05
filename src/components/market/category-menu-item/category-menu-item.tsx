import type { JSX } from "react"

interface CategoryItemProps {
    name: string
    imageUrl: string
    longDescription: string
    description: string
    isCollapsed: boolean
    onCollapseAll: (categoryName: string) => void
}


function OnCategorySelected(props: CategoryItemProps): JSX.Element {
    const { name, imageUrl, longDescription, description, isCollapsed } = props

    const classCategoryTitle = isCollapsed ? 'category-title category-title-collapsed' : 'category-title'
    const classImage = isCollapsed ? 'category-image-collapsed' : 'category-image'
    const classDescription = isCollapsed ? 'category-longdesc-collapsed' : 'category-longdesc'

    return (
        <>
            <span className={classCategoryTitle} data-testid = 'q' >{name}</span>
            <img className={classImage} src={imageUrl} alt={description + ' image'} />
            <span className={classDescription}>{longDescription}</span>
        </>
    )
}

const CategoryItem = (props: CategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description, isCollapsed, onCollapseAll } = props

    const handleClick = () => {
        console.log(`category clicked: ${name}`)
        onCollapseAll(name)
    }
    return (
        <>
            <div onClick={handleClick}>
                <OnCategorySelected
                    name={name}
                    imageUrl={imageUrl}
                    longDescription={longDescription}
                    description={description}
                    isCollapsed={isCollapsed}
                    onCollapseAll={onCollapseAll} />
            </div>

            {/* <span className="category-title">{name}</span>
            <img className="category-image" src={imageUrl} alt={description + ' image'} />
            <span className="category-longdesc">{longDescription}</span> */}
        </>
    )
}

export { CategoryItem }