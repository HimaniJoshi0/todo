import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"todo",
    initialState:JSON.parse(localStorage.getItem("todos")) || [],
    reducers:{
        addTodo(state,action){
           // console.log("state",state)
            const newState = [...state, action.payload];
            console.log('Updated state after adding:', newState);
            localStorage.setItem("todos", JSON.stringify(newState));
            return newState;
        },

        removeTodo(state,action){
           state.splice(action.payload, 1)
           console.log('Updated state after removing:');
           localStorage.setItem("todos", JSON.stringify(state));
           //console.log(state)

        },
        
        updateTodo(state,action){
            const[item,index]= action.payload
             state[index]=item;
             console.log("updated todo value")
             
        }
        

    }

})

export const { addTodo, removeTodo,updateTodo} = userSlice.actions;
export {userSlice};