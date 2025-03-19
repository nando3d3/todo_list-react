import { useState } from "react";
import Input from "./Input";
function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 hover:bg-slate-600 focus:outline-offset-2 focus:outline-slate-500 active:bg-slate-700 rounded-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa!");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;
