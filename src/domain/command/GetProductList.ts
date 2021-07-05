import Web from "../infrastructure/web/Web";
import Product from "../model/Product";
import SetProduct from "./SetProduct";

export default class GetProductList {
    private web: Web;

    public setProduct: SetProduct;


    public constructor() {
        this.web = new Web();
        this.setProduct = new SetProduct();
    }

    public async execute(path: string): Promise<Array<Object>> {
        const results: Object | any = await this.web.fetch<Array<Object>>(`${path}`)


        console.log(results)
        // return data.products
        const products: Array<Product> = results.data.products.map((item: Product) => {
            return this.setProduct.execute(item)
        })

        return products
    }
}