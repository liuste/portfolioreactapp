import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import crudReducer from './crudReducer';

export default combineReducers({
  name: crudReducer,
  form: formReducer
});