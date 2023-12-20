import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  
    const [value, setValue] = useState(initial);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };

const Today = () => {
    const [todo, setTodo] = useState('');
    const [todayTodos, setTodayTodos] = useLocalStorage('todayTodos', []);

    const addTodo = (taskType) => {
        if (todo !== '') {
          const newTodo = { id: Date.now(), task: todo };
    
          switch (taskType) {
            case 'today':
              setTodayTodos([...todayTodos, newTodo]);
              break;
            default:
              break;
          }
    
          setTodo('');
        }
      };

    const deleteTodo = (taskType, id) => {
        switch (taskType) {
          case 'today':
            setTodayTodos(todayTodos.filter((todo) => todo.id !== id));
            break;
          default:
            break;
        }
      };
    useEffect(() => {
        // Load todos from local storage
        const storedTodayTodos = localStorage.getItem('todayTodos');
        if (storedTodayTodos) {
            setTodayTodos(JSON.parse(storedTodayTodos));
        }
    
    }, []);
    

    const saveTodosToLocalStorage = () => {
        // Save todos to local storage
        localStorage.setItem('todayTodos', JSON.stringify(todayTodos));
    };

    useEffect(() => {
        saveTodosToLocalStorage();
    }, [todayTodos]);

    return (
        <div className="p-2">
            <h2>Upcoming Tasks</h2>
            <div className="d-flex flex-column">
                <h2>Today</h2>
                <div className="d-flex flex-row form-group">
                <button
                        className="btn btn-white bg-white border border-1"
                        onClick={() => addTodo('today')}
                    >
                        <img src="/assets/Dashboard/add.png" style={{ width: '24px' }} />
                    </button>
                    <input
                        type="text"
                        id="todayTask"
                        className="form-control"
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Add new Task"
                    />
                </div>
            </div>
            <div className="d-flex flex-column mt-4 px-2 overflow-y-scroll" style={{ maxHeight: "300px", overflowY: "auto" }}>
                {todayTodos.map((todo) => (
                        <div key={todo.id} className="form-check px-4">
                            <input
                                type="checkbox"
                                onClick={() => deleteTodo('today', todo.id)}
                                className="form-check-input"
                                id={`upcomingTask${todo.id}`}
                            />
                            <label className="form-check-label" htmlFor={`upcomingTask${todo.id}`}>
                                {todo.task}
                            </label>
                            <hr />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Today;    