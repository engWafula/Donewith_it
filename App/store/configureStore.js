import reducer from "./reducer";
import {configureStore}  from  "@reduxjs/toolkit"
import logger from "./middleware/logger";
import func from  "./middleware/func";
import toast from "./middleware/toast";
import api from "./middleware/api";
export  default function (){
    const store=configureStore({
        reducer,
        middleware:[ toast,logger( {decription:"console"}),func,api
   
    ]
    })
     return store

}