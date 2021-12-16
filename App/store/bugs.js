import {createSlice}  from  "@reduxjs/toolkit"
import { apiCallBegan } from "./api";
import  {createSelector}  from "reselect"
import moment from "moment"
// let lastid=0;

const slice=createSlice({
    initialState:{
        list:[],
        loading:false,
        lastFetch:null
    },
    name:"bugs",
    reducers:{
        bugsRequestFailed:(bugs,action)=>{
    bugs.loading=false
        },
        bugsRequested:(bugs,action)=>{
            bugs.loading=true
        },
        bugsReceived:(bugs,action)=>{
    bugs.list=action.payload
    bugs.loading=false
    bugs.lastFetch=Date.now()
        },
        bugAdded:(bugs,action)=>{
            bugs.list.push(action.payload)
        },
        bugAssigned:(bugs,action)=>{
       const {id:bugId,userId}=action.payload
       const  index=bugs.list.findIndex(bug=>bug.id==bugId)
       bugs.list[index].userId=userId
        },
       bugResolved:(bugs,action)=>{
           const index=bugs.list.findIndex(bug=>bug.id===action.payload.id)
             bugs.list[index].resolved=true
       },
       bugRemoved:(bugs,action)=>{
        bugs.list.filter(bug=>bug.id !== action.payload.id)
       }
    }
})
export default slice.reducer
const{bugAdded,bugResolved,bugRemoved,bugAssigned,bugsReceived,bugsRequested,bugsRequestFailed}=slice.actions

const url="/listings";
export const loadBugs=()=>(dispatch,getState)=>{
    const {lastFetch}=getState().entities.bugs
   const diffTime= moment().diff(moment(lastFetch),"minutes")

   if(diffTime<10) return   

    dispatch( apiCallBegan({
        url,
        onSucess:bugsReceived.type,
        onStart:bugsRequested.type,
        onError:bugsRequestFailed.type
      })
)
}
   export  const addBug=(bug)=>apiCallBegan({
       url,
       onSucess:bugAdded.type,
       onError:bugsRequestFailed.type,
       method:"post",
       data:bug
   })
   export const resolveBug=(id)=>apiCallBegan({
      url:url+"/"+id,
      method:"patch",
      data:{resolved:true},
      onSucess:bugResolved.type,
      
   })

   export const assignBugToUser=(userId,bugId)=>apiCallBegan({
    url:url+"/"+bugId,
    method:"patch",
    data:{userId},
    onSucess:bugAssigned.type

   })

   

export const getunResolvedBugs =createSelector(
state=> state.entities.bugs,
bugs=> bugs.filter(bug=>!bug.resolved)

)

export const getBugsByUsers =userId=>createSelector(
    state=> state.entities.bugs,
    bugs=> bugs.filter(bug=>bug.userId===userId)
    
    )