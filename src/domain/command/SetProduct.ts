import formatCurrency from "../methods/formatCurrency"
import Product from "../model/Product"
export default class SetProduct {
    private createProduct(data: Product): Product {
        console.log(data.productName.toUpperCase())
        return {

            productName: data.productName,
            price: data.items[0].sellers[0].commertialOffer.Price,
            sobconsulta: data.sobconsulta,
            image: data.items[0].images[0].imageUrl,
            installment: data.installment,
            formattedPrice: data.formattedPrice

        }
    }

    private setName(product: Product): void {
        product.productName = product.productName.toUpperCase()
    }

    private setPrice(product: Product): void {
        if (product.price) {
            product.formattedPrice = new formatCurrency().format(product.price)
        } else {
            product.price = 0;
            product.formattedPrice = '';
        }
    }

    private setInstallment(product: Product): void {
        if (product.price) {

            const installment = product.price / 10
            const formattedValue = new formatCurrency().format(installment)
            product.installment = `10x de ${formattedValue} sem juros`
        } else {
            product.installment = ''
        }
    }

    private setSobConsulta(product: Product): void {
        if (!product.sobconsulta) {
            product.sobconsulta = 'nao'
        }
    }

    private setImages(product: Product): void {
        if (!product.image) {
            product.image = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAIVBMVEX19fXd3d3z8/Pq6urb29vi4uLx8fHt7e3n5+fk5OTf39/UY198AAACNElEQVR4nO3a4Y6rIBCGYRUE9P4veO0KijB022xSTOd9zj/Xk9AvMgjOMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDualrGy+t6juhNXB7Sxofe4bmQVIxqt6z2w25jkhMbR9B7ZbcjzbMNMS3wroqX3yG7DtCJae4+sm+lqEFb8FNFU3qtCaAXyilVDSN7+J6Jx7j3+D2gWnkYkFzrK05OI1sV457wJ2avk9T9b1RHZOduTTcdd19qjOqK13GwEIro+QsJ7tPudbi5f8p3iWiSfe8zS0/bh4fYgRdQ6GRJOAJRGdG7oJx+CyaoSEe2Ot0GfZtZRmer3TJ0RpUVryfJIU6/avqmMKJ14XAqPjRlVR0kqI4qlp3xe4uVyVdMYUfzNVdVJ14koleZ6fd+nWnmurTGiPQlXH5HEha7ITmNETrz6sN9fFCOFEdl9yZeOIve/FGVcY0T7VSLK8BT9Sa5Fwqe0GAa1KO1h6xUtvnWzoqUkqs1Y7HmYiuw0RhR/c7UZW57e/tWqN6C4YTVWjKJ861YZUTouCpeM4gkJO/38McpWNXu0hFRbN50Rnb/arKPd/i3ulZu/l7Aby9uInMu+nAm9WUojanWjSQ1+WiOSMxL7+9RGJPXEyDfqjajqjnXSp1jlEW2z7fzG6OdWo5buiB4NRsGYsDQ61YnoNRoiEg7y36GiFbvZiE5Cp7KZ+g29hw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIbhB3oYDvixwDtCAAAAAElFTkSuQmCC`
        }
    }


    public execute(data: Product): Product {
        const product: Product = this.createProduct(data);

        this.setName(product)
        this.setPrice(product);
        this.setInstallment(product);
        this.setSobConsulta(product);
        this.setImages(product)

        return product


    }
}