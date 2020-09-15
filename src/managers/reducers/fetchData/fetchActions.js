const initialState = {
    selectedStore:"",
    adminData: [],
    userData:[],
    allUserData: [],
    allStoreData:[],
    storeCategoryData:[],
    productCategoryData:[],
    allfeedbackData:[],
    storeProductData:[]


}

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
        default:
            return state
    }
}

export default FetchAction