import { useState } from "react";

const EachTodo: React.FC<{ text: string; removeTodo: () => void }> = (
	props
) => {
	const [deleteVisibility, setDeleteVisibility] = useState(false);

	const deleteHandler = () => {};

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
					onClick={() => props.removeTodo()}
					className="px-2  py-1 bg-red-500 rounded-lg">
					Delete
				</button>
			)}
		</div>
	);
};

export default EachTodo;
