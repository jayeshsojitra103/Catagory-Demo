import React from 'react';

import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

import ExpanderContainer from '../Common/ExpanderContainer';
import AddCategorySectionContainer from '../add-category-section/AddCategorySectionContainer';

const renderCategories = (
  categoriesList, handleContextMenuClick,
  currentCategoryId,
  addSubCategory, setAddSubCategory,
  editCategory, setEditCategory,
  expand,
) => {
  const handleClick = (e, data) => {
    handleContextMenuClick(data);
  };
  return (
    <ul>
      {
        categoriesList && categoriesList.length > 0 && categoriesList.map((category) => (
          <li key={category.id}>
            {(() => {
              const children = category.child;
              if (children && children.length > 0) {
                return (
                  <>
                    <ContextMenuTrigger id={category.id}>
                      <ExpanderContainer
                        title={category.name}
                        expandAll={expand}
                      >
                        {renderCategories(
                          children, handleContextMenuClick,
                          currentCategoryId,
                          addSubCategory, setAddSubCategory,
                          editCategory, setEditCategory,
                        )}
                      </ExpanderContainer>
                    </ContextMenuTrigger>
                    <ContextMenu id={category.id}>
                      <MenuItem data={{ action: 'add', category }} onClick={handleClick}>
                        Add
                      </MenuItem>
                      <MenuItem data={{ action: 'edit', category }} onClick={handleClick}>
                        Edit
                      </MenuItem>
                      <MenuItem data={{ action: 'delete', category }} onClick={handleClick}>
                        Delete
                      </MenuItem>
                    </ContextMenu>
                    {
                      addSubCategory
                      && currentCategoryId === category.id
                      && (
                        <AddCategorySectionContainer
                          parentCategoryId={currentCategoryId}
                          category={category}
                          setAddSubCategory={setAddSubCategory}
                        />
                      )
                    }
                    {
                      editCategory
                      && currentCategoryId === category.id
                      && (
                        <AddCategorySectionContainer
                          currentCategoryId={currentCategoryId}
                          category={category}
                          setEditCategory={setEditCategory}
                        />
                      )
                    }
                  </>
                );
              }
              return (
                <>
                  <ContextMenuTrigger id={category.id}>
                    <span className="name">{category.name}</span>
                  </ContextMenuTrigger>
                  <ContextMenu id={category.id}>
                    <MenuItem data={{ action: 'add', category }} onClick={handleClick}>
                      Add
                    </MenuItem>
                    <MenuItem data={{ action: 'edit', category }} onClick={handleClick}>
                      Edit
                    </MenuItem>
                    <MenuItem data={{ action: 'delete', category }} onClick={handleClick}>
                      Delete
                    </MenuItem>
                  </ContextMenu>
                  {
                    addSubCategory
                    && currentCategoryId === category.id
                    && (
                      <AddCategorySectionContainer
                        parentCategoryId={currentCategoryId}
                        category={category}
                        setAddSubCategory={setAddSubCategory}
                      />
                    )
                  }
                  {
                    editCategory
                    && currentCategoryId === category.id
                    && (
                      <AddCategorySectionContainer
                        currentCategoryId={currentCategoryId}
                        category={category}
                        setEditCategory={setEditCategory}
                      />
                    )
                  }
                </>
              );
            })()}
          </li>
        ))
      }
    </ul>
  );
};

const CategoriesListSection = ({
  categoriesList, handleContextMenuClick,
  addSubCategory, setAddSubCategory,
  currentCategoryId,
  editCategory, setEditCategory,
  expand,
}) => (
  <section className="categories-list-section-container">
    <div className="categories-list-section">
      {renderCategories(
        categoriesList, handleContextMenuClick,
        currentCategoryId,
        addSubCategory, setAddSubCategory,
        editCategory, setEditCategory,
        expand,
      )}
    </div>
  </section>
);



export default CategoriesListSection;
