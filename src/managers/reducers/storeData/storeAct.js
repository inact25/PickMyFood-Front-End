import {initialState} from "../initialState/reduxState";

const StoreAction = (state = initialState, action) => {
    switch (action.type) {
        case 'GETSTORECATEGORY' :
            return {
                ...state,
                storeCategoryData: action.JsonData
            }
        case 'GETACTIVESTORES':
            return  {
                ...state,
                activeStoreData: action.JsonData
            }
        case 'GETDELETEDSTORES':
            return  {
                ...state,
                deletedStoreData: action.JsonData
            }
        default:
            return state
    }
}

export default StoreAction