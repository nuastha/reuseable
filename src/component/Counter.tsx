import { useToDoContext } from "../lib/Custom"

export default function Counter() {
    const { totalTaskDone, totalTask } = useToDoContext()

    return (
        <p >
            <b>{totalTaskDone}</b> / {totalTask} ToDos completed
        </p>
    )
}
