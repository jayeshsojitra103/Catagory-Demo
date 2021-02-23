
export const addNewCategory = (id, categoryName) => ({
  type: 'ADD_NEW_CATEGORY',
  payload: ({
    data: {
      id,
      categoryName,
    },
  }),
});

export const getCategoriesList = () => ({
  type: 'GET_CATEGORIES_LIST',
});

export const deleteCategory = (categoryId) => ({
  type: 'DELETE_CATEGORY',
  payload: categoryId,
});

export const editCategory = (categoryId, categoryName) => ({
  type: 'EDIT_CATEGORY',
  payload: ({ data: { categoryId, categoryName } }),
});

export const addSubCategory = (parentCategoryId, categoryId, categoryName) => ({
  type: 'ADD_SUB_CATEGORY',
  payload: ({
    data: {
      parentCategoryId,
      categoryId,
      categoryName,
    },
  }),
});

export const expandAll = (expand) => ({
  type: 'EXPAND_ALL',
  payload: expand,
});
