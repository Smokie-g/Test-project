import {
    DATA_CREATE,
    DATA_GET
} from '../actions/types';

const INITIAL_STATE = {
    new_data: []
};
export default (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case DATA_CREATE:
            return {...state, new_data:state.new_data.concat(action.payload)};   
        case DATA_GET:
            return {...state, new_data:action.payload}; 
        default:
            return state;
    }
};