import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import HeaderSection from './HeaderSection';

import * as actions from '../../../redux/actions';

const HeaderSectionContainer = ({ expandAll }) => {
  const [expand, setExpand] = useState(false);
  const handleOnClick = () => {
    setExpand((prev) => !prev);
  };

  useEffect(() => {
    expandAll(expand);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand]);

  return (
    <HeaderSection handleOnClick={handleOnClick} />
  );
};


const mapDispatchToProps = (dispatch) => ({
  expandAll: (expand) => dispatch(actions.expandAll(expand)),
});

export default connect(null, mapDispatchToProps)(HeaderSectionContainer);
