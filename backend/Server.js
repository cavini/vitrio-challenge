var express = require('express');
var fs = require('fs');
var cors = require('cors');
var app = express();
app.use(cors());
var products = JSON.parse(fs.readFileSync(`${__dirname}/data/catalogo.json`));
app.get('/products', function (_req, res) {
  res.status(200).json({
    status: 'success',
    data: {
      products: products,
    },
  });
});
var port = 5000;
app.listen(port, function () {
  console.log('App running on port ' + port + '...');
});
