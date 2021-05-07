import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(dafaultValue = "") {
  const [value, setValue] = useState("");

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form className="mb-5" onSubmit={submitHandler}>
      <div className="row">
        <div className="col-10">
          <input {...input.bind} type="text" className="form-control" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
