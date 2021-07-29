import homeActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './home.actions';
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE

        default: return state;
    };
}

export default homeReducer;