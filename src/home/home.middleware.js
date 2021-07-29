import homeActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './home.actions';
import  {services} from './home.services'

const homeMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default homeMiddleware;