import React from 'react';
import { useTodo } from '../../hooks';
import { Formik, Form, Field } from 'formik';

const Todo = () => {
  const { tasks, setTasks, addTask, setDoneTask, deleteTask } = useTodo(
    [
      {
        id: Date.now(),
        body: 'test task',
        isDone: false
      }
    ]
  );
  return (
    <div>
      {/* компонент */}
      <Formik initialValues={{ body: '' }} onSubmit={addTask}>
        <Form>
          <Field name='body' />
          <input type='submit' value='add' />
        </Form>

      </Formik>
      {/* компонент */}

      <h2>tasks list</h2>
      <ul>
        {
          tasks.map((task) =>
            <li key={task.id}>
              <input type='checkbox' checked={task.isDone} onChange={() => setDoneTask(task.id)} />
              {task.body}
              <button onClick={() => { deleteTask(task.id) }} >x</button>
            </li>)
        }
      </ul>
    </div>
  );
}

export default Todo;
