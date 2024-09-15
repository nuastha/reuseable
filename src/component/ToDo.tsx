import DeleteButton from "./DeleteButton";
import { useToDoContext } from "../lib/Custom";

// const date = new Date()

export default function ToDo() {
  const { list, handleUpdateTask } = useToDoContext()

  return (
    <ul>
      {
        list.length === 0 && (<li className="flex justify-center items-center h-full capitalize font-bold">No tasks</li>)
      }

      {
        list.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center h-[50px] px-8 text-[14px] cursor-pointer border-b border-black/[8%] capitalize"
            onClick={() => handleUpdateTask(todo.id)}
          >
            <span className={`${todo.isDone ? 'line-through text-[#ccc]' : ''}`}>{todo.name}</span>
            {/* <span>{date.toLocaleString()}</span> */}
            <DeleteButton todo={todo.id} />
          </li>
        ))
      }
    </ul >
  )
}
