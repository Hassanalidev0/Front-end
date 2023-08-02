import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({ onCategoryClick, categories }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const uniqueCategories = Array.from(new Set(categories));

  const toggleSidebar = () => {
    if (isSmallScreen) {
      setSidebarVisibility(!isSidebarVisible);
    }
  };

  // Check screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425);
      // Hide the sidebar when resizing from small screen to large screen
      if (!isSmallScreen) {
        setSidebarVisibility(false);
      }
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    if (isSmallScreen) {
      setSidebarVisibility(false); // Hide the sidebar when a category is clicked on a small screen
    }
  };

  const handleSeeAllCategories = () => {
    if (isSmallScreen) {
      setSidebarVisibility(false); // Hide the sidebar when "See All Categories" is clicked on a small screen
    }
    // Handle the "See All Categories" case separately by not passing any specific category value
    onCategoryClick(); // This will indicate the user wants to see all categories without applying any specific category filter
  };

  return (
    <div className=' row d-flex flex-column border border-2 p-1 ' style={{backgroundColor:'white'}}>
      {/* Toggle Button */}
      {isSmallScreen && (
        <button className='btn btn-primary mb-2' onClick={toggleSidebar}>
          {isSidebarVisible ? 'Hide Filter' : 'Filter'}
        </button>
      )}

      {/* Category List */}
      {isSmallScreen && isSidebarVisible && (
        <>
          <p style={{ fontSize: 15 }}>CATEGORIES</p>
          <div className='d-flex flex-column p-1 border border-2'>
            {uniqueCategories.map((category, index) => (
              <NavLink
                className='text-nowrap'
                key={index}
                onClick={() => handleCategoryClick(category)}
                style={{ textDecoration: 'none' }}
              >
                {category}
              </NavLink>
            ))}
            <NavLink
              className='text-nowrap'
              onClick={handleSeeAllCategories}
              style={{ textDecoration: 'none' }}
            >
              See All Categories
            </NavLink>
          </div>
        </>
      )}

      {/* Category List for larger screens */}
      {!isSmallScreen && (
        <>
          <p style={{ fontSize: 15 }}>CATEGORIES</p>
          <div className='d-flex flex-column p-1 border border-2'>
            {uniqueCategories.map((category, index) => (
              <NavLink
                className='text-nowrap'
                key={index}
                onClick={() => handleCategoryClick(category)}
                style={{ textDecoration: 'none' }}
              >
                {category}
              </NavLink>
            ))}
            <NavLink
              className='text-nowrap'
              onClick={handleSeeAllCategories}
              style={{ textDecoration: 'none' }}
            >
              See All Categories
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
