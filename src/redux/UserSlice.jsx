import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
const getData=createAsyncThunk('user/getdata',
async()=>{
    const res=await axios.get('https://dummyjson.com/users')
    return res.data
}
)


export const UserSlice=createSlice({
    name:"user",
    initialState:{
        user:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(getData.fulfilled,(state,action)=>{
            state.user=action.payload
        })
    }
})
export default UserSlice.reducer