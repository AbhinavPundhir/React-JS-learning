import React, {useContext, createContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Hello msg",
            completed: true,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
