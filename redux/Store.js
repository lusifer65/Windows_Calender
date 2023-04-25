import { createStore } from 'redux';
import reducer from './Reducer';
const store = createStore(reducer);
console.log("stroe",store.getState());
export default store;