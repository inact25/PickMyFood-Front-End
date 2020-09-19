import {initialState} from "../initialState/reduxState";

const ProductAction = (state = initialState, action) => {
    switch (action.type) {
        case 'GETPRODUCTCATEGORY' :
            return {
                ...state,
                productCategoryData: action.JsonData
            }
        case 'GETACTIVESTOREPRODUCT':
            return  {
                ...state,
                storeActiveProductData: action.JsonData
            }
        case 'GETDELETEDSTOREPRODUCT':
            return  {
                ...state,
                storeDeletedProductData: action.JsonData
            }
        default:
            return state
    }
}

export default ProductAction