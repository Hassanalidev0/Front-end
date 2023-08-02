import React from 'react';
import Layout from './Layout';
import ProductData from '../api/ProductData';
import Card from '../components/Card';
import { useEffect, useState } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const fetchData = async () => {
      const data = await ProductData();
      setProducts(data);
  
      // Extract unique categories from the data
      const uniqueCategories = Array.from(new Set(data.map((product) => product.category)));
      setCategories(uniqueCategories);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    // Filter products based on the selected category
    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  
    return (
      <Layout type='leftSidebar' selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} categories={categories}>
      
         
         {/* <div className='border border-2 p-2'>
         <SideBar onCategoryClick={handleCategoryClick} categories={categories} />
         </div>  */}
         <div className=" row border border-2 d-flex flex-wrap" style={{backgroundColor:'white'}}>
            {filteredProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          
         </div>
        
      </Layout>
    );
  };
  
  export default ProductList;
