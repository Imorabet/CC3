import { useSelector } from "react-redux";

function ListTodo() {
    const task=useSelector(state=>state.todo.tasks)
    return ( 
        <div>
            <table>
                <thead>
                    <td>Id tache</td>
                    <td>Tache</td>
                    <td>Termine</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{task.id}</td>
                        <td>{task.todo}</td>
                        <td>{task.completed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default ListTodo;