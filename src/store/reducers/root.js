import {
    FETCH_WHISKIES,
    FETCH_WHISKIES_FAILURE,
    FETCH_WHISKIES_SUCCESS
} from '../action';
const initialState = {
    whiskies: [], // for this example we'll make an app that fetches and lists whiskies
    isLoading: false,
    error: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_WHISKIES:
        return{
            ...state,
            isLoading:true,
            error:null
        }
        case FETCH_WHISKIES_SUCCESS:
        return{
            whiskies:[...action.payload],
            isLoading:false,
            error:null
        }
        case FETCH_WHISKIES_FAILURE:
        return{
            whiskies:[],
            isLoading:false,
            error:action.payload
        }
        default:
            return state;
    }
}