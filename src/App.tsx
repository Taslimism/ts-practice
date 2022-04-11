import Todos from "./component/Todo";
import { useDispatch, useSelector } from "react-redux";

import AddTodo from "./component/AddTodo";
import { RootState } from "./store/reducers/todoReducers";
import { ADD_TODO, REMOVE_TODO } from "./store/constants/todo";

function App() {
	const state = useSelector((state: RootState) => state);

	return (
		<>
			<AddTodo />
			<Todos items={state} />
		</>
	);
}

export default App;
