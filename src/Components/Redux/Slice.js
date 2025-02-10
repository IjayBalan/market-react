import {createSlice} from "@reduxjs/toolkit"
import Product from "../Products.json"

let Slice=createSlice({
    name:"user",
    initialState:{
      Items:Product.Products
    },
    reducers:{
favUpdate:(state,action)=>{
state.Items=action.payload
},
addUpdt:(state,action)=>{
  state.Items=action.payload
},
minusProducts:(state,action)=>{
  state.Items=action.payload
},
addProducts:(state,action)=>{
  state.Items=action.payload
},
deletItems:(state,action)=>{
  state.Items=action.payload
},
newProducts:(state,action)=>{
  state.Items=action.payload
}
    }
})
export let {favUpdate,addUpdt,minusProducts,addProducts,deletItems,newProducts}=Slice.actions
export default Slice.reducer
