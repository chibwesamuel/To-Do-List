import { createStore } from 'redux';
import rootReducer from './reducers/todoReducer';

// Create Redux store with the root reducer
const store = createStore(rootReducer);

export default store;
