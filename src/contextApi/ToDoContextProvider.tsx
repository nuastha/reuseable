import { createContext, useEffect, useState } from "react"
import { Todo } from "../lib/types"
import { useKindeAuth } from "@kinde-oss/kinde-auth-react"

// Define context type
type ToDoContextProviderProps = {
    children: React.ReactNode
}

// Define context type
type ToDoContextType = {
    list: Todo[]
    totalTask: number
    totalTaskDone: number
    handleAddTask: (name: string) => void
    handleDeleteTask: (id: number) => void
    handleUpdateTask: (id: number) => void
}

// Create context
export const ToDoContext = createContext<ToDoContextType | null>(null)

const getLocalStorage = () => {
    const data = localStorage.getItem('todoList')
    if (data) {
        return JSON.parse(data)
    }
    return []
}

export default function ToDoContextProvider({ children }: ToDoContextProviderProps) {
    const { isAuthenticated } = useKindeAuth()
    // State
    const [list, setTodoList] = useState<Todo[]>(getLocalStorage)

    // Derivative state
    const totalTask = list.length
    const totalTaskDone = list.filter((item) => item.isDone).length

    // Functions to handle the state or actions
    const handleAddTask = (name: string) => {
        if (name === '') {
            alert('enter the word')
            return
        }
        if (list.length >= 3 && !isAuthenticated) {
            alert('You can only add 3 tasks')
            return
        }
        setTodoList((prev) => [...prev, { id: prev.length + 1, name, isDone: false }])
    }

    const handleDeleteTask = (id: number) => {
        setTodoList((prev) => prev.filter((item) => item.id !== id))
    }

    const handleUpdateTask = (id: number) => {
        setTodoList((prev) => prev.map((item) => {
            if (item.id === id) {
                return { ...item, isDone: !item.isDone }
            }
            return item
        }))
    }

    // side effect

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(list))
    }, [list])

    return (
        <ToDoContext.Provider
            value={{
                list,
                totalTask,
                totalTaskDone,
                handleAddTask,
                handleDeleteTask,
                handleUpdateTask
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}
