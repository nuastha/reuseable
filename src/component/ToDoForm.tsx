import Button from "./Button";
import { useState } from "react";
import { useToDoContext } from "../lib/Custom";


export default function ToDoForm() {
    const [name, setName] = useState('')
    const { handleAddTask } = useToDoContext()

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleAddTask(name)
            setName('')
        }}>
            <h2 className="font-medium text-[#231d15]">Add a new task</h2>
            <input type="text" placeholder="Add a new task" className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button buttonType="primary" type="submit">Add to list</Button>
        </form>
    )
}