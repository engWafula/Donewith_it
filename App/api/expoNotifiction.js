import client from "./client"


const  Registernotification=(pushToken)=>client.post("/expoPushTokens",{token:pushToken})
export default {Registernotification};