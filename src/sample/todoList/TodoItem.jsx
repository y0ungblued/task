import { useState } from 'react';

const TodoItem = ({ todo, onEdit, onDel, onMod, onSave }) => {
    const { id, text, isDone, isMod } = todo;
    const [txt, setTxt] = useState(text);
    return (
        <li className={isDone ? 'on' : ''}>
            <div>
                {/* <span onClick={() => onEdit(id)}>✓</span> */}
                {/* <input type="checkbox" onClick={() => onEdit(id)} /> */}
                <input type="checkbox" checked={isDone} onChange={(e) => onEdit(e, id)} />
                {!isMod ? (
                    <p>
                        <em>{text}</em>
                        <button onClick={() => onMod(id)}>edit</button>
                    </p>
                ) : (
                    <p className="save">
                        <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
                        <button className="saveBtn" onClick={() => onSave(id, txt)}>
                            save
                        </button>
                    </p>
                )}
            </div>
            <button onClick={() => onDel(id)}>delete</button>
        </li>
    );
};

export default TodoItem;
