import * as types from './actionType'

const statedata={
    alluser: [],
    singleuser:{},
    name:"Raj nagar"
}
const userReducer=(state=statedata,action)=>{
    switch(action.type){

        case types.ALL_USER:
            return {
                ...state,
                alluser: action.payload,
            }
            
        case types.SINGLE_USER:
            return {
                ...state,
                singleuser: action.payload,
            }    

        default:
        return state;    
    }
}
export default userReducer;




