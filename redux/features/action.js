import * as types from './actionType'
import axios from "axios"


export const add_data=(api,formvalue)=>{
    return function(){
        axios.post(api,formvalue);
    }
}

const getsingledata=(user)=>({
    type:types.SINGLE_USER,
    payload:user
})

export const view_singledata=(api)=>{
    return function(dispatch){
        axios.get(api)
        .then((resp)=>{   
            dispatch(getsingledata(resp.data))
            console.log(resp.data);    
        })
    }
}

const getdata=(users)=>({
    type:types.ALL_USER,
    payload:users
})

export const view_data=()=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/user`)
        .then((resp)=>{   
            dispatch(getdata(resp.data))
            console.log(resp.data);    
        })
    }
}

export const deletedata=(api)=>{
    return function(){
        axios.delete(api);
    }
}


export const update_data=(api,formvalue)=>{
    return function(){
        axios.patch(api,formvalue);
    }
}
