import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store/constants/todo";
import Todo from "../model/todo";

const AddTodo: React.FC = (props) => {
	const formInput = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const submitHanlder = (event: React.FormEvent) => {
		event.preventDefault();

		let inputText = formInput.current?.value;
		if (!inputText || inputText.trim().length === 0) return;
		const newTodo = new Todo(inputText);
		dispatch({ type: ADD_TODO, payload: newTodo });
	};

	return (
		<form
			onSubmit={submitHanlder}
			className="flex flex-col w-8/12 mt-8 mx-auto align-center ">
			<label className="text-green-500 font-bold text-lg" htmlFor="input">
				Todo text
			</label>
			<input
				className="border border-green-700 mt-1 outline-none h-1/4 py-2 px-4 rounded border-b-8"
				id="input"
				type="text"
				ref={formInput}
			/>
			<button className="bg-yellow-600 w-2/12 mt-5 px-4 py-2 rounded text-white">
				Add Items
			</button>
		</form>
	);
};

export default AddTodo;
