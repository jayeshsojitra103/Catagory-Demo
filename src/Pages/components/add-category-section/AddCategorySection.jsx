import React from 'react';


const AddCategorySection = ({
  categoryName, handleChange, handleSubmit, showError,
  parentCategoryId, currentCategoryId,
}) => (
  <section className="add-category-section-container">
    <div className="add-category-section">
      <div className="add-category">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control" name="category"
            onChange={handleChange} value={categoryName} />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              {
                parentCategoryId
                  ? 'Add sub category'
                  : currentCategoryId
                    ? 'Update'
                    : 'Add'
              }
            </button>
          </div>
        </div>


      </div>
      {showError && (<span className="error">This field is required.</span>)}
    </div>
  </section>
);

export default AddCategorySection;
