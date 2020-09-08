const initialState = {
    userData: [],
    allUserData: [],
    allStoreData:[],
    storeCategoryData:[],
    productCategoryData:[],
    allfeedbackData:[]


}

const FetchAction = (state = initialState, action) => {
    switch (action.type) {
        case 'GETADMINDATA' :
            return {
                ...state,
                userData: action.JsonData
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
        default:
            return state
    }
}

export default FetchAction