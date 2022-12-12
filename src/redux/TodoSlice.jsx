import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getData=createAsyncThunk('todo/getdata',
async()=>{
    const res=await axios.get('https://dummyjson.com/users')
    return res.data
}
)

export const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        todo:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(getData.fulfilled,(state,action)=>{
            state.todo=action.payload
        })
    }
})
export default TodoSlice.reducer