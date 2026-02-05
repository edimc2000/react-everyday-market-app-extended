import './brands.css'
import JSX from 'react'
import { useNavigate } from 'react-router-dom'
import { fashionBrands, type IBrand } from '../models/brand-interface'
import { Shop } from '../shop/shop'


interface FilteredBrandsProps {
    category: string
}

function FilteredBrands({ category }: FilteredBrandsProps): JSX.Element {
    const navigate = useNavigate()

    const brandsList: IBrand[] = fashionBrands.filter(brand =>
        brand.type.includes(category.toLowerCase())
    )

    const handleBrandClick = (brandName: string) => {
        navigate(`/shop?cat=${category.toLowerCase()}&brand=${brandName.toLowerCase()}`)
    }

    console.log(`---322- ${fashionBrands[0].type}`)
    console.log(`---322- ${fashionBrands[0].type.includes(category.toLowerCase())}`)

    return (
        <>
            brand count {brandsList.length} {category}
            <div className="brands-title"> Our Featured Brands</div>
            <div className="brands-container">


                {brandsList.map((brand: IBrand) => (
                    <div className="product-details" key={brand.name} onClick={() => handleBrandClick(brand.name)}>

                        <div className="name-logo">
                            <img className="brand-logo" src={brand.imageUrl} alt="{data.name} logo" />
                                <div className="brand-name"> {brand.name}</div>
                        </div>

                        <span>{brand.name}</span>
                        <span>{brand.longDescription}</span>
                        <span>{brand.type}</span>
                    </div>
                ))}


            </div>
            
            <Shop />

            {/* brands page is  working */}
            <span>Category: {category}</span>

        </>
    )
}

export { FilteredBrands }