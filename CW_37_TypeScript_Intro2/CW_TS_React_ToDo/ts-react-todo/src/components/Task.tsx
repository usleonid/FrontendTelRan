import { useRef, useState } from "react";

interface Props {
    deleteTask: (index: number) => void,
    updateTask: (index: number, content: string) => void,
    children: string,
    index: number,
}

const Task = ({ deleteTask, updateTask, children, index }: Props) => {
    const [isEdit, setIsEdit] = useState(false);
    // Создал ссылку, которую можно повесить на любой элемент.
    // Таким образом в React реализована получение ссылки на элемент для работы с логикой
    const textId = useRef<HTMLTextAreaElement>(null);

    const handleClickEdit = () => {
        // Здесь мы корректно меняем значение state
        setIsEdit(true);
        // Изменение state напрямую некорректно, так как React не будет следить за изменением state
        // isEdit = true;
    };

    const handleClickRemove = () => {
        // alert(`Press remove ${props.children}`);
        deleteTask(index);
        // deleteTask(props.index);
    };

    const handleClickSave = () => {
        // Получаем обновлённую задачу из textarea, где пользователь обновил контент
        const updatedContent = textId.current!.value;
        // alert(updatedContent);
        // Из props получаем переданный от родителя метод updateTask, в который передаём необходимые параметры (индекс и обновлённую задачу)
        updateTask(index, updatedContent);

        setIsEdit(false);
    };

    const renderEdit = () => {
        return (
            <div className="box">
                {/* В этом месте кода мы связали ссылку и конкретный элемент (в данном случае textarea) */}
                <textarea ref={textId} defaultValue={children}></textarea>
                <button className="btn success" onClick={handleClickSave}>
                    Save
                </button>
            </div>
        );
    };

    const renderView = () => {
        return (
            <div className="box">
                <div>{children}</div>
                <button className="btn light" onClick={handleClickEdit}>
                    Edit
                </button>
                <button className="btn red" onClick={handleClickRemove}>
                    Remove
                </button>
            </div>
        );
    };

    return isEdit ? renderEdit() : renderView();
};

export default Task;