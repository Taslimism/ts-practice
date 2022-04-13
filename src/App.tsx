import Todos from "./component/Todo";
import { useSelector } from "react-redux";

import AddTodo from "./component/AddTodo";
import { RootState } from "./store/reducers/todoReducers";

function App() {
	const todos = useSelector((state: RootState) => state);

	return (
		<>
			<AddTodo />
			<Todos items={todos} />
		</>
	);
}

export default App;
