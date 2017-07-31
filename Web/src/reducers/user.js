import newEntryExistsInArray from './helpers/newEntryExistsInArray'
import mansPBuilder from './builders/mansPBuilder'

const initialState = {
    name: '',
    deductionTypes: [],
    mansPs: []
}

const user = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'ADD_DEDUCTION_TO_USER':
            if(newEntryExistsInArray(state.deductionTypes, action.name)){
                return state;
            }
            else{
                return {
                    ...state,
                    deductionTypes: [...state.deductionTypes, action.name]
                }
            }
        case 'ADD_MANS_PS_TO_USER':
            if(newEntryExistsInArray(state.mansPs, action.manP)){
                return state
            }
            else{
                return{
                    ...state,
                    mansPs: [...state.mansPs, mansPBuilder(undefined, action)]
                }
            }
        default: 
            return state
    }
};

export default user;