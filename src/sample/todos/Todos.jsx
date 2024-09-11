import { useRef, useState } from 'react';
import TodoInput from '../todoInput/TodoInput';
import TodoList from '../todoList/TodoList';
import './Todos.scss';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const no = useRef(1);
    // {id: 1, text: '???', isDone: false} -> [배열]에 각각 들어갈 내용

    // add
    const onAdd = (text) => {
        setTodos([...todos, { id: no.current++, text, isDone: false, isMod: false }]);
    };
    // delete
    const onDel = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    // edit
    const onEdit = (e, id) => {
        const { checked } = e.target;
        // setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: checked } : todo)));
    };

    // modify
    const onMod = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isMod: true } : todo)));
    };

    // save
    const onSave = (id, text) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isMod: false, text } : todo)));
    };

    return (
        <div className="Todos">
            <h2>add ToDos</h2>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onEdit={onEdit} onMod={onMod} onSave={onSave} />
        </div>
    );
};

export default Todos;

/* css 처리 방법 유형
1. html/css처럼 전체 스타일 style.css 생성 후 연결해 사용
   모든 css style.css 관리하는 방식, 유지 보수 및 재사용하기 어려워 좋은 예는 아니다

2. 컴포넌트 하나에 css(scss) 하나씩 연결해 처리한다 보통의 방법
   단, 오류 발생 시 재사용, 관리 어려움 클래스 명 등 신경써서 작성

3. (추후 설명)
*/
