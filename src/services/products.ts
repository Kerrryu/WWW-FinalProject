import axios from 'axios';
import { IGetProductsResponse, IProduct } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      'https://firebasestorage.googleapis.com/v0/b/terionshopping.appspot.com/o/products.json?alt=media'
    );
    console.log("Cloud file loaded for products");
  } else {
    response = require('static/json/products.json');
    console.log("Local file loaded for products");
  }

  let products: IProduct[];
  if (response && response.products) {
    products = response.products;
  } else {
    products = [];
  }

  return products;
};
