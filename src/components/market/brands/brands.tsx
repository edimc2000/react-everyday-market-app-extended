import './brands.css'
import JSX from 'react'
import { fashionBrands, type IBrand } from '../models/brand-interface'


interface FilteredBrandsProps {
    brandX: string
}

function FilteredBrands({ brandX }: FilteredBrandsProps): JSX.Element {

    const brandsList: IBrand[] = fashionBrands.filter(brand =>
        brand.type.includes(brandX.toLowerCase())
    )

    console.log(`---322- ${fashionBrands[0].type}`)
    console.log(`---322- ${fashionBrands[0].type.includes(brandX.toLowerCase())}`)

    return (
        <>
            brand count {brandsList.length}
            <div className="brands-title"> Our Featured Brands</div>
            <div className="brands-container">


                {brandsList.map((brand: IBrand) => (
                    <div className="product-details" key={brand.name}>

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


            {/* brands page is  working */}
            <span>{brandX}</span>

        </>
    )
}

export { FilteredBrands }