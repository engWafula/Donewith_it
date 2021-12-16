import {createSlice}  from  "@reduxjs/toolkit"

let lastid=0;

const slice=createSlice({
    initialState:[],
    name:"users",
    reducers:{
        userAdded:(users,action)=>{
            users.push( {
                id:++lastid,
                  name:action.payload.name,
                
            
               })
        },
    }
})
export default slice.reducer
export const{userAdded}=slice.actions
