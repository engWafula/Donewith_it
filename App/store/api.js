import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan=createAction("api/CallBegan")
export const apiCallSucess=createAction("api/CallSucess")
export const apiCallFailed=createAction("api/CallFailed")