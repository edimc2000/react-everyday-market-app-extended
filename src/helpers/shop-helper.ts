import { type IMerchandise, getMerchandiseByBrandAndType } from '../components/market/models/merchandise'


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


 class ShopDisplay { 

// static display

 }


export { ShopService, type IShopService, ShopDisplay}


