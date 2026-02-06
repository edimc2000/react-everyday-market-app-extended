import { type JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { fashionBrands, type IBrand } from '../models/brand-interface'
import './brands.css'

interface IFilteredBrandsProps {
    category: string
}

/**
 * FilteredBrands Component
 * Displays brands filtered by selected category with navigation to shop
 * 
 * @component
 * @param {IFilteredBrandsProps} props - Receives selected category for filtering
 * @returns {JSX.Element} Grid of brands filtered by category
 */
const FilteredBrands = ({ category }: IFilteredBrandsProps): JSX.Element => {
    const navigate = useNavigate()

    const brandsList: IBrand[] = fashionBrands.filter(brand =>
        brand.type.includes(category.toLowerCase())
    )

    /**
    * Navigates to shop page with selected category and brand
    * @param brandName - Selected brand name
    */
    const handleBrandClick = (brandName: string) => {
        navigate(`/shop?cat=${category.toLowerCase()}&brand=${brandName.toLowerCase()}`)
    }


    return (
        <>
            <div className="brands-title"> Our Featured Brands</div>
            <div className="brands-container">

                {brandsList.map((brand: IBrand) => (
                    <div className="product-details" key={brand.name} onClick={() => handleBrandClick(brand.name)}>

                        <div className="name-logo">
                            <img className="brand-logo" src={brand.imageUrl} alt="{data.name} logo" />
                            <div className="brand-name"> {brand.name}</div>
                        </div>

                        <span className="description">{brand.description}</span>
                        <span className="long-description">{brand.longDescription}</span>

                    </div>
                ))}

            </div>
        </>
    )
}

export { FilteredBrands }