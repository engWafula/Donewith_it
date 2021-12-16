const toast =store=>next=>action=>{
    if(typeof action==="error")
    console.log("Toastfy",action.payload.message)

    else
    next(action)
}

export  default  toast