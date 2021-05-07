import React from "react";

function addTodo() {
  return (
    <form className='mb-5'>
      <div className="row">
        <div className="col-10">
          <input type="text" className="form-control" />
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

export default addTodo;
