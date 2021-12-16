import {createSlice}  from  "@reduxjs/toolkit"

let lastid=0;

const slice=createSlice({
    initialState:[],
    name:"projects",
    reducers:{
        projectAdded:(projects,action)=>{
            projects.push( {
                id:++lastid,
                  name:action.payload.name,
                
            
               })
        },
    }
})
export default slice.reducer
export const{projectAdded}=slice.actions
