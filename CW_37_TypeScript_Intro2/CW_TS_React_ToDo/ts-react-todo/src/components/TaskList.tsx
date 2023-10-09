import { useState } from "react";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState(["Task1", "Task2", "Task3"]);

    const deleteTask = (index: number) => {
        // Не меняем state напрямую: для этого получаем точную копию с помощью оператора spread
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        // в объекте обычно мы сохраняем пары 'ключ - значение', но если ключ и значение имеют
        // одинаковое имя можно прописать имя только один раз (не дублировать)
        // const obj = {
        //     // 'tasks': tasks
        //     tasks
        // }
        // this.setState(obj);
        setTasks(tasksCopy);
    };

    const updateTask = (index: number, content: string) => {
        // Получили копию состояния (state)
        const tasksCopy = [...tasks];
        // Обновили контент нужной задачи
        tasksCopy[index] = content;
        // Обновлённую копию сохранили в качестве нового значения состояния
        setTasks(tasksCopy);
    };

    const createTask = () => {
        const tasksUpdate = [...tasks, "New Task"];
        setTasks(tasksUpdate);
    };

    return (
        <div className="field">
            <button onClick={createTask} className="btn new">
                Add Task
            </button>
            {tasks.map((task, index) => (
                // Если нам нужен только второй параметр метода map (т.е. index)
                // (или любого другого подобного метода) мы можем использовать синтаксис, указанный ниже:
                // {this.state.tasks.map((_, index) => (
                <Task
                    key={index + 1}
                    // В этом месте мы передаём метод вместе с параметром, который для вызова этой функции необходим
                    deleteTask={() => deleteTask(index)}
                    // В этом месте мы передаём метод без информации о параметрах, которые для вызова этой функции необходимы
                    // Для передачи параметра функции перед будущим вызовом метода отдельно передаём его через props
                    index={index}
                    // deleteTask={deleteTask}
                    updateTask={updateTask}
                >
                    {task}
                </Task>
            ))}
        </div>
    );
};

export default TaskList;