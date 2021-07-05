export default class formatCurrency {
    public format(value: number) {
        const brazilianCurrency = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        return brazilianCurrency.format(value)
    }
}