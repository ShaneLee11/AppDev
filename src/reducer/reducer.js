import * as type from '../actions/ActionType';
import initialState from './initialState';

export default UserData = (state = initialState.userData, action) => {
    switch (action.type) {
        case type.USER_INFO: 
        return {
            ...state,
            info: action.info
        };

        default:
        return state;
    }
}