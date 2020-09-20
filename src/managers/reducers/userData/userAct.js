import {initialState} from "../initialState/reduxState";

const UserAction = (state = initialState, action) => {
    switch (action.type) {
        case 'GETADMINDATA' :
            return {
                ...state,
                adminData: action.JsonData
            }
        case 'GETUSERDATA':
            return  {
                ...state,
                userData:action.JsonData
            }
        case 'GETACTIVEUSERS':
            return {
                ...state,
                activeUserData: action.JsonData
            }
        case 'GETDELETEDUSERS':
            return {
                ...state,
                deletedUserData: action.JsonData
            }
        default:
            return state
    }
}

export default UserAction