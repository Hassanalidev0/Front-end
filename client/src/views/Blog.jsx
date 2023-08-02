import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import { Carousel } from 'react-bootstrap';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  // Use useMemo to memoize the blogData array
  const blogData = useMemo(() => [
    {
      title: "Post Format Standard - February 26, 2018",
      category: "Articles",
      src: "/images/slide1.jpg",
      alt: "Slide 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet dapibus ante mollis a. Integer bibendum interdum sem, eget volutpat purus pulvinar in. Sed tristique augue vitae sagittis porta. Phasellus ullamcorper, dolor suscipit mattis viverra, sapien elit condimentum odio, ut imperdiet nisi risus sit amet ante. Sed sem lorem, laoreet et facilisis quis, tincidunt non lorem. Etiam tempus, dolor in sollicitudin faucibus, sem massa accumsan erat. “ Many desktop...",
    },
    {
      title: "Post Format Video - February 26, 2018",
      category: "Model",
      src: "/images/slide1.jpg",
      alt: "Slide 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet dapibus ante mollis a. Integer bibendum interdum sem, eget volutpat purus pulvinar in. Sed tristique augue vitae sagittis porta. Phasellus ullamcorper, dolor suscipit mattis viverra, sapien elit condimentum odio, ut imperdiet nisi risus sit amet ante. Sed sem lorem, laoreet et facilisis quis, tincidunt non lorem. Etiam tempus, dolor in sollicitudin faucibus, sem massa accumsan erat. “ Many desktop...",
    },
    {
      title: "Post Format Image - February 27, 2018",
      category: "Fashion",
      src: "/images/slide1.jpg",
      alt: "Slide 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet dapibus ante mollis a. Integer bibendum interdum sem, eget volutpat purus pulvinar in. Sed tristique augue vitae sagittis porta. Phasellus ullamcorper, dolor suscipit mattis viverra, sapien elit condimentum odio, ut imperdiet nisi risus sit amet ante. Sed sem lorem, laoreet et facilisis quis, tincidunt non lorem. Etiam tempus, dolor in sollicitudin faucibus, sem massa accumsan erat. “ Many desktop...",
    }
  ], []);

  useEffect(() => {
    // Extract unique categories from the blog data
    const uniqueCategories = Array.from(new Set(blogData.map((blog) => blog.category)));
    setCategories(uniqueCategories);
  }, [blogData]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogData = selectedCategory
    ? blogData.filter((blog) => blog.category === selectedCategory)
    : blogData;

  return (
    <Layout type="rightSidebar" selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} categories={categories}>
      {/* <div className="container d-flex flex-row-reverse mt-1"> */}
        {/* <div className='border border-2 p-3 blogButton'>
          <SideBar onCategoryClick={handleCategoryClick} categories={categories} />
        </div> */}
        <div className=" row d-flex flex-column border border-2 p-3 gap-2" style={{background:'white'}}>
          <h2>Selected Category: {selectedCategory || "All"}</h2>
          {/* React Bootstrap Carousel */}
          <div className="border border-2">
            <Carousel>
              {filteredBlogData.map((blog, index) => (
                <Carousel.Item key={index}>
                <img className="d-block w-100" src={blog.src} alt={blog.alt} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          {/* Content Div */}
          <div className="border border-2">
            {filteredBlogData.map((blog, index) => (
              <div key={index}>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                {/* Add other content fields here */}
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </Layout>
  );
};

export default Blog;
