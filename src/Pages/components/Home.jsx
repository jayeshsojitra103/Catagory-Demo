import React from 'react';

import HeaderSectionContainer from './header-section/HeaderSectionContainer';
import AddCategorySectionContainer from './add-category-section/AddCategorySectionContainer';
import CategoriesListSectionContainer from './categories-list-section/CategoriesListSectionContainer';

const Home = () => (
  <div className="page_wrapper">
    <div className="category_wrapper">
      <HeaderSectionContainer />
      <AddCategorySectionContainer />
      <CategoriesListSectionContainer />
    </div>
  </div>
);

export default Home;
