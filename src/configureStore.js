import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = () => (
  createStore(
    rootReducer,
    {},
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  )
);

export default configureStore;
