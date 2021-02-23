import React from 'react';

const HeaderSection = ({ handleOnClick }) => (
  <section className="header-wrapper">
    <div className="header-section">
      <button className="expand_btn" type="button" onClick={handleOnClick}>Expand All</button>
    </div>
  </section>
);

export default HeaderSection;
