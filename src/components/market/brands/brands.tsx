import './brands.css'
import  JSX  from 'react'
import { fashionBrands, type IBrand } from '../models/brand-interface'


interface FilteredBrandsProps {
    brand: string
}

function FilteredBrands({ brand }: FilteredBrandsProps): JSX.Element {

const brandsList = fashionBrands.filter ( brand => 
    brand.type.includes(FilteredBrands)
)


    return (
        <>
           {/* brands page is  working */}
           <span>{brand}</span>
        </>
    )
}

export {FilteredBrands}