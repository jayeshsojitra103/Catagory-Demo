/* eslint-disable import/no-anonymous-default-export */

const localInitialState = localStorage.getItem('data_list');
let localState = [];
if (localInitialState) {
  localState = JSON.parse(localInitialState);
}

const initialState = {
  categories: localState,
  expandAll: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_NEW_CATEGORY': {
      const categoriesList = [
        ...state.categories,
        {
          id: payload.data.id,
          name: payload.data.categoryName,
        },
      ];
      localStorage.setItem('data_list', JSON.stringify(categoriesList));
      return {
        ...state,
        categories: categoriesList,
      };
    }
    case 'GET_CATEGORIES_LIST': {
      let localStorageState = localStorage.getItem('data_list');
      if (localStorageState) {
        localStorageState = JSON.parse(localInitialState);
      }
      return {
        ...state,
        categories: localStorageState || [],
      };
    }
    case 'DELETE_CATEGORY': {
      const deleteCategory = (id, data) => data.reduce((arr, item) => {
        if (item.id !== id) {
          if (item.child) {
            // eslint-disable-next-line no-param-reassign
            item.child = deleteCategory(id, item.child);
          }
          arr.push(item);
        }
        return arr;
      }, []);
      const categoriesList = deleteCategory(payload, state.categories);
      localStorage.setItem('data_list', JSON.stringify(categoriesList));
      return {
        ...state,
        categories: categoriesList,
      };
    }
    case 'EDIT_CATEGORY': {
      const editCategoryDetails = (id, name, data) => data.reduce((arr, item) => {
        if (item.id === id) {
          arr.push({ ...item, name });
        } else if (item.child) {
          // eslint-disable-next-line no-param-reassign
          item.child = editCategoryDetails(id, name, item.child);
          arr.push(item);
        } else {
          arr.push(item);
        }
        return arr;
      }, []);
      const categoriesList = editCategoryDetails(
        payload.data.categoryId, payload.data.categoryName, state.categories,
      );
      localStorage.setItem('data_list', JSON.stringify(categoriesList));
      return {
        ...state,
        categories: categoriesList,
      };
    }
    case 'ADD_SUB_CATEGORY': {
      const addSubCategory = (
        parentCategoryId, id, name, data,
      ) => data.reduce((arr, item) => {
        if (item.id === parentCategoryId) {
          let _item = {};
          if (item.child) {
            _item = {
              ...item,
              child: [
                ...item.child,
                {
                  id,
                  name,
                },
              ],
            };
          } else {
            _item = {
              ...item,
              child: [
                {
                  id,
                  name,
                },
              ],
            };
          }
          arr.push(_item);
        } else if (item.child) {
          // eslint-disable-next-line no-param-reassign
          item.child = addSubCategory(
            parentCategoryId, id, name, item.child,
          );
          arr.push(item);
        } else {
          arr.push(item);
        }
        return arr;
      }, []);
      const categoriesList = addSubCategory(
        payload.data.parentCategoryId,
        payload.data.categoryId,
        payload.data.categoryName,
        state.categories,
      );
      localStorage.setItem('data_list', JSON.stringify(categoriesList));
      return {
        ...state,
        categories: categoriesList,
      };
    }
    case 'EXPAND_ALL': {
      return {
        ...state,
        expandAll: payload,
      };
    }
    default:
      return state;
  }
};
