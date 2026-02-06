import { type IMerchandise, getMerchandiseByBrandAndType } from '../components/market/models/merchandise'

import { type ICartItem } from '../components/market/models/merchandise'

interface IShopProps {
    cartCounter: number
    setCartCounter: (value: number | ((prev: number) => number)) => void
    cartItems: ICartItem[]
    setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void
}


interface IShopService {
    getFilteredMerch(cat: string, brand: string): Promise<IMerchandise[]>
}

class ShopService implements IShopService {

    getFilteredMerch(cat: string, brand: string): Promise<IMerchandise[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = getMerchandiseByBrandAndType(brand, cat)
                resolve(filtered)
            }, 500)
        })
    }
}




export { ShopService, type IShopService, type IShopProps}


