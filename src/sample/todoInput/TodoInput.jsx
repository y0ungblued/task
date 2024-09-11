import { useRef, useState } from 'react';
import './TodoInput.scss';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef('');

    const changeInput = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
        textRef.current.focus();
    };

    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input
                type="text"
                onChange={changeInput}
                value={text}
                ref={textRef}
                placeholder="공백 없이 입력"
            />
            <button type="submit">add</button>
        </form>
    );
};

export default TodoInput;
