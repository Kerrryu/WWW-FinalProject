import axios from 'axios';
import { IGetProductsResponse, IProduct } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      'https://firebasestorage.googleapis.com/v0/b/terionshopping.appspot.com/o/products.json?alt=media&token=ead69e68-80d8-4b67-91ef-ae14562aeb6f'
    );
    console.log("Cloud file loaded for products");
  } else {
    response = await axios.get(
      '/products.json'
    );
    console.log("Local file loaded for products");
  }

  let products: IProduct[];
  if (response && response.data.products) {
    products = response.data.products;
  } else {
    products = [];
  }

  return products;
};
