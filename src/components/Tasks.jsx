import { SquareArrowOutUpRight, ListX } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, deleteTaskClick }) {
  const naviagte = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("completed", task.isCompleted);
    naviagte(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md break-words overflow-hidden ${
              task.isCompleted && "line-through"
            }`}
            title={
              task.isCompleted
                ? "Marcar tarefa como pendente"
                : "Marcar tarefa como concluída"
            }
          >
            {task.title}
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white"
            title="Ver detalhes"
            onClick={() => onSeeDetailsClick(task)}
          >
            <SquareArrowOutUpRight />
          </button>
          <button
            onClick={() => deleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
            title="Excluir tarefa"
          >
            <ListX />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
