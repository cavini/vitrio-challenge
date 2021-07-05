const express = require("express")
const fs = require('fs')
const cors = require('cors')


const app = express();

app.use(cors())

const products = JSON.parse(fs.readFileSync(`${__dirname}/data/catalogo.json`))
app.get('/products', (_req: Request, res: any) => {

    res.status(200).json({
        status: 'success',
        data: {
            products
        }
    })

})




const port = 5000;


app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})