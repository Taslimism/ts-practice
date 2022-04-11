import { useState } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_TODO } from "../store/constants/todo";
import Todo from "../model/todo";

const EachTodo: React.FC<{ text: string; id: string }> = (props) => {
	const [deleteVisibility, setDeleteVisibility] = useState(false);
	const dispatch = useDispatch();

	const removeThisTodo = (id: string) => {
		dispatch({ type: REMOVE_TODO, payload: id });
	};

	return (
		<div
			onMouseOver={() => {
				setDeleteVisibility(true);
			}}
			onMouseLeave={() => {
				setDeleteVisibility(false);
			}}
			className="px-5 py-2 flex justify-between bg-slate-200 shadow-md shadow-slate-500/50 rounded mb-2">
			<li>{props.text}</li>
			{deleteVisibility && (
				<button
					onClick={() => removeThisTodo(props.id)}
					className="px-2  py-1 bg-red-500 rounded-lg">
					Delete
				</button>
			)}
		</div>
	);
};

export default EachTodo;
