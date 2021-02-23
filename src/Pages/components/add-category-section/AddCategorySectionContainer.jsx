import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import AddCategorySection from './AddCategorySection';
import * as actions from '../../../redux/actions';


const AddCategorySectionContainer = ({
  addNewCategory, parentCategoryId, currentCategoryId, category,
  editCategory, setEditCategory,
  addSubCategory, setAddSubCategory,
}) => {
  const [categoryName, setCategoryName] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (currentCategoryId) {
      setCategoryName(category.name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setCategoryName(value);
    if (showError) setShowError(false);
  };

  const handleSubmit = () => {
    if (categoryName.trim() !== '') {
      if (parentCategoryId) {
        const id = uuid();
        addSubCategory(parentCategoryId, id, categoryName);
        setAddSubCategory(false);
      } else if (currentCategoryId) {
        editCategory(currentCategoryId, categoryName);
        setEditCategory(false);
      } else if (categoryName.trim() !== '') {
        const id = uuid();
        addNewCategory(id, categoryName);
        setCategoryName('');
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <AddCategorySection
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      categoryName={categoryName}
      showError={showError}
      parentCategoryId={parentCategoryId}
      currentCategoryId={currentCategoryId}
    />
  );
};


const mapDispatchToProps = (dispatch) => ({
  addNewCategory: (id, categoryName) => dispatch(actions.addNewCategory(id, categoryName)),
  editCategory: (id, categoryName) => dispatch(actions.editCategory(id, categoryName)),
  addSubCategory: (
    parentCategoryId, id, categoryName,
  ) => dispatch(actions.addSubCategory(
    parentCategoryId, id, categoryName,
  )),
});

export default connect(null, mapDispatchToProps)(AddCategorySectionContainer);
