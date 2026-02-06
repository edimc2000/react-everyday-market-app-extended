import { type IMerchandise, getMerchandiseByBrandAndType }
    from '../components/market/models/merchandise'

import { type ICartItem } from '../components/market/models/merchandise'

/**
 * Shop component props interface
 * Defines cart state management for Shop component
 */
interface IShopProps {
    cartCounter: number
    setCartCounter: (value: number | ((prev: number) => number)) => void
    cartItems: ICartItem[]
    setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void
}

/**
 * Shop service interface
 * Defines filtering operations
 */
interface IShopService {
    getFilteredMerch(cat: string, brand: string): Promise<IMerchandise[]>
}

/**
 * Shop Service Implementation
 * Handles asynchronous merchandise filtering with simulated API delay
 */
class ShopService implements IShopService {

     /**
     * Filters merchandise by category and brand
     * Simulates 2-second API delay for data fetching
     * 
     * @param cat - Product category filter
     * @param brand - Brand name filter
     * @returns Promise resolving to filtered merchandise array
     */
    getFilteredMerch(cat: string, brand: string): Promise<IMerchandise[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = getMerchandiseByBrandAndType(brand, cat)
                resolve(filtered)
            }, 2000)
        })
    }
}

export { ShopService, type IShopService, type IShopProps }


