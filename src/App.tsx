import Todos from "./component/Todo";
import Todo from "./model/todo";
import AddTodo from "./component/AddTodo";
import { useState } from "react";
function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const handleTodo = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prevTodo) => [...prevTodo, newTodo]);
	};

	const handleRemove = (id: string) => {
		setTodos((prevTodo) => {
			return prevTodo.filter((todo) => todo.id != id);
		});
	};
	return (
		<>
			<AddTodo addTodo={handleTodo} />
			<Todos items={todos} removeTodo={handleRemove} />
		</>
	);
}

export default App;
