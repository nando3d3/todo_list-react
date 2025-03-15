import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const isCompleted = searchParams.get("completed") === "true";
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-100"
            title="Voltar ao Gerenciador de Tarefas"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Descrição sobre:
            <span className="text-slate-800 break-words"> {title}</span>
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <p className="text-white">
            {isCompleted ? "Concluída ✅" : "Pendente ⏳"}
          </p>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p className="text-white break-words">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
