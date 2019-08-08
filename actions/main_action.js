import {
    DATA_CREATE,
    DATA_GET
} from './types';
import axios from 'axios';

export const dataCreate = new_data => dispatch => {
    dispatch({ type: DATA_CREATE, payload: new_data });
}

export const dataFetch = () => {
    return (dispatch) => {
        axios.get('https://gist.githubusercontent.com/creograf/8665557b5b22498706b7a220a4ef9a2f/raw/5694d1cacdfaae35c43fe738e80d05c3b7b47a20/api.json')
        .then(response => dispatch({ type: DATA_GET, payload: response.data}));
    }
}