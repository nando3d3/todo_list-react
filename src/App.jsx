import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   async function fetchTask() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       { method: "GET" }
  //     );
  //     const data = await response.json();

  //     setTasks(data);
  //   }

  //   fetchTask();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function deleteTaskClick(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function onAddTaskClick(taskTitle, taskDescription) {
    const newTask = {
      id: v4(),
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        {tasks.length > 0 && (
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            deleteTaskClick={deleteTaskClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
