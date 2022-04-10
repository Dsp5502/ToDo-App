import { combineReducers, createStore } from 'redux';
import { TodoReducer } from '../reducers/TodoReducer';
import { getLocalStorage, saveLocalStorage } from '../utils/LocalStorage';

const storageStage = getLocalStorage();

const reducers = combineReducers({
  todoReducerStore: TodoReducer,
});

const store = createStore(
  reducers,
  storageStage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveLocalStorage({
    todoReducerStore: store.getState().todoReducerStore,
  });
});

export default store;
