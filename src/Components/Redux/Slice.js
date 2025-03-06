import {createSlice} from "@reduxjs/toolkit"
import Product from "../Products.json"

let Slice=createSlice({
    name:"user",
    initialState:{
      Items:Product.Products,
      vegItems:Product.vegProducts
    },
    reducers:{
favUpdate:(state,action)=>{
state.Items=action.payload
},
vegfavUpdate:(state,action)=>{
  state.vegItems=action.payload
},
addUpdt:(state,action)=>{
  state.Items=action.payload
},
vegaddUpdt:(state,action)=>{
  state.vegItems=action.payload
},
minusProducts:(state,action)=>{
  state.Items=action.payload
},
vegminusProducts:(state,action)=>{
  state.vegItems=action.payload
},
addProducts:(state,action)=>{
  state.Items=action.payload
},
vegaddProducts:(state,action)=>{
  state.vegItems=action.payload
},
deletItems:(state,action)=>{
  state.Items=action.payload
},
vegDeletItems:(state,action)=>{
  state.vegItems=action.payload
},
newProducts:(state,action)=>{
  state.Items=action.payload
},
newVegProducts:(state,action)=>{
  state.vegItems=action.payload
},
    }
})
export let {favUpdate,addUpdt,minusProducts,addProducts,deletItems,newProducts,vegfavUpdate,vegaddUpdt,vegminusProducts,vegaddProducts,vegDeletItems,newVegProducts}=Slice.actions
export default Slice.reducer
