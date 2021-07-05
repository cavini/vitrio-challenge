import Configuration from './Configuration';



export default class Web {
    public async fetch<Product>(path: string): Promise<Product> {
        const response: any = await fetch(`${Configuration.PRODUCTS_API}/${path}`);


        return response.json()
    }
}