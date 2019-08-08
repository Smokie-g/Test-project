import { combineReducers } from 'redux';
import table_reducer from './table_reducer';
import add_reducer from './add_reducer';
export default combineReducers ({
 tableReducer:table_reducer,
 addReducer: add_reducer
});