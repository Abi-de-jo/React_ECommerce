const express = require('express');
const { getProducts, getingleProducts } = require('../controller/productCont');
const router = express.Router();

router.route('/products').get(getProducts)
router.route('/products/:id').get(getingleProducts);

module.exports=router;