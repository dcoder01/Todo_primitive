// import { createContext, useContext } from "react";

// export const Todocontext = createContext({
//     todos: [
//         {
//             id: 1,
//             name:"ex",
//             completed: false
//         }

//     ],
//     addTodo: (todo)=>{},
//     updateTodo: (id, todo)=>{},
//     deleteTodo: (id)=>{},
//     toggleComplete: (id)=>{},
// });

// export const Todoprovider = Todocontext.Provider

// export const useTodo = () => {
//     return useContext(Todocontext)
// }

import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [],
    addTodo: ()=>{},
    updateTodo: ()=>{},
    deleteTodo: ()=>{},
    toggleComplete: ()=>{},
});

export const Todoprovider = Todocontext.Provider

export const useTodo = () => {
    return useContext(Todocontext)
}