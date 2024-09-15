import { useToDoContext } from "../lib/Custom"

export default function DeleteButton({ todo }: { todo: number }) {
  const { handleDeleteTask } = useToDoContext()
  return (
    <button onClick={(e) => {
      // Then it updates the state with this new filtered list
      e.stopPropagation()
      handleDeleteTask(todo)
    }}>❌</button>
  )
}
