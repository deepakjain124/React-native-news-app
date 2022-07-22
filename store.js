import {configureStore} from "@reduxjs/toolkit";
import newReducer from "./slices/dataSlices"
export const store=configureStore({
    reducer:{
        news:newReducer
    }
})