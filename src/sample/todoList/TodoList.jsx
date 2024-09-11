import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ todos, onDel, onEdit, onMod, onSave }) => {
    return (
        <ul className="TodoList">
            {todos.map((todo) => (
                // <TodoItem key={todo.id} {...todo} onDel={onDel} onEdit={onEdit} />
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDel={onDel}
                    onEdit={onEdit}
                    onMod={onMod}
                    onSave={onSave}
                />
            ))}
        </ul>
    );
};

export default TodoList;
