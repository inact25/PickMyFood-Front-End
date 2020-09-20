import {initialState} from '../initialState/reduxState'

const FetchAction = (state = initialState, action) => {
    switch (action.type) {
        case 'GETALLFEEDBACK' :
            return  {
                ...state,
                allfeedbackData:action.JsonData
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