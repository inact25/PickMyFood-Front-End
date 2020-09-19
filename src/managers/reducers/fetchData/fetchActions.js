import {initialState} from '../initialState/reduxState'

const FetchAction = (state = initialState, action) => {
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
        case 'GETALLUSERS':
            return {
                ...state,
                allUserData: action.JsonData
            }
        case 'GETALLSTORES' :
            return {
                ...state,
                allStoreData:action.JsonData
            }
        case 'GETPRODUCTCATEGORY' :
            return {
                ...state,
                productCategoryData: action.JsonData
            }
        case 'GETSTORECATEGORY' :
            return {
                ...state,
                storeCategoryData:action.JsonData
            }
        case 'GETALLFEEDBACK' :
            return  {
                ...state,
                allfeedbackData:action.JsonData
            }
        case 'SELECTEDSTORE':
            return  {
                ...state,
                selectedStore: action.JsonData
            }
        case 'GETSTOREPRODUCT':
            return  {
                ...state,
                storeProductData: action.JsonData
            }
        case 'GETALLRATING':
            return  {
                ...state,
                storeRatingData:action.JsonData
            }
            case 'GETALLTOPUP':
            return  {
                ...state,
                topupData:action.JsonData
            }
            case 'GETALLTRANSACTION':
            return  {
                ...state,
                transactionData:action.JsonData
            }
        default:
            return state
    }
}

export default FetchAction