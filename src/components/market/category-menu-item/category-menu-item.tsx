import {type JSX } from "react"

interface ICategoryItemProps {
    name: string
    imageUrl: string
    longDescription: string
    description: string
    isCollapsed: boolean
    onCollapseAll: (categoryName: string) => void
}

/**
 * OnCategorySelected Component
 * Renders category content with collapsible styling
 * 
 * @component
 * @param {ICategoryItemProps} props - Category display properties
 * @returns {JSX.Element} Category title, image and description
 */
const OnCategorySelected = (props: ICategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description, isCollapsed } = props

    const classCategoryTitle = isCollapsed ? 'category-title category-title-collapsed' : 'category-title'
    const classImage = isCollapsed ? 'category-image-collapsed' : 'category-image'
    const classDescription = isCollapsed ? 'category-longdesc-collapsed' : 'category-longdesc'

    return (
        <>
            <span className={classCategoryTitle}>{name}</span>
            <img className={classImage} src={imageUrl} alt={description + ' image'} />
            <span className={classDescription}>{longDescription}</span>
        </>
    )
}


/**
 * CategoryItem Component
 * Clickable category item that collapses menu on selection
 * 
 * @component
 * @param {ICategoryItemProps} props - Category properties with collapse handler
 * @returns {JSX.Element} Interactive category display
 */
const CategoryItem = (props: ICategoryItemProps): JSX.Element => {
    const { name, imageUrl, longDescription, description, isCollapsed, onCollapseAll } = props

    const handleClick = () => {
        console.log(`category clicked: ${name}`)
        onCollapseAll(name)
    }

    return (
        <div onClick={handleClick}>
            <OnCategorySelected
                name={name}
                imageUrl={imageUrl}
                longDescription={longDescription}
                description={description}
                isCollapsed={isCollapsed}
                onCollapseAll={onCollapseAll} />
        </div>
    )
}

export { CategoryItem }