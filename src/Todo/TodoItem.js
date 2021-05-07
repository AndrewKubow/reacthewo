import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from '../context'

function TodoItem({ todo, index, onChange }) {
   const {removeTodo} = useContext(Context)
   const classes = []
   if (todo.completed) {
    classes.push('done')
   }
   
  return (
    <li>
      <span className={classes.join(' ')}>
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <span className="badge rounded-pill bg-dark">{index + 1}</span>
      
      {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id) } className="btn btn-danger">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
