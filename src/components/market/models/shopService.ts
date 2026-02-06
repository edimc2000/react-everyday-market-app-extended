import { merchandiseItems, type IMerchandise , getMerchandiseByBrandAndType} from '../models/merchandise'

interface IShopService {
    getFilteredMerch(cat: string, brand: string): Promise<IMerchandise[]>
}

class ShopService implements IShopService {

    getFilteredMerch(cat: string, brand: string): Promise<IMerchandise[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                // const filtered = merchandiseItems.filter(
                //     item => item.type.toLowerCase() === cat.toLowerCase() 
                //         && item.brandName.toLowerCase() === brand.toLowerCase()
                // )
                const filtered = getMerchandiseByBrandAndType(brand, cat)
                resolve(filtered)
            }, 500)
        })
    }
}

export { ShopService, type IShopService }
// export type { IShopService }