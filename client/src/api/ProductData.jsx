import axios from 'axios';
const ProductData = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching dummy product data:', error);
    return [];
  }
};

export default ProductData;