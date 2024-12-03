import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./Slice/Mobileslice";
import otpReducer from "./Slice/Otpslice"
import productsReducer from "./Slice/Allproducts";
import profileUpdateReducer from "./Slice/Profileupdateslice";
export const Store = configureStore({
    reducer:{
       mobile: mobileReducer,
       otp: otpReducer,
       products: productsReducer,
       profileUpdate: profileUpdateReducer
    }
})