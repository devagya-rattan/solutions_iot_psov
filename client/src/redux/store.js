import { legacy_createStore as createStore} from 'redux';
import userReducer from '../redux/Reducer/Userreducer';

const store = createStore(userReducer);
export default store;