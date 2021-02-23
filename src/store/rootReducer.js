import { combineReducers } from 'redux';
import { reducer } from '../Container';

const rootReducer = combineReducers({
  home: reducer,
});

export default rootReducer;
