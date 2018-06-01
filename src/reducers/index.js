import {combineReducers} from 'redux';
import DonorReducer from './reducer-donors';

const allReducers = combineReducers({
    donor: DonorReducer
});

export default allReducers