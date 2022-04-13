import { ADD_TODO, REMOVE_TODO } from "../constants/todo";
import Todo from "../../model/todo";

const todoReducers = (
	state: Todo[] = [],
	actions: { type: string; payload: Todo | string }
) => {
	switch (actions.type) {
		case ADD_TODO:
			if (typeof actions.payload === "string") return state;
			const data: Todo[] = [...state, actions.payload];
			return data;
		case REMOVE_TODO:
			if (typeof actions.payload === "object") return state;
			const newData: Todo[] = state.filter(
				(item) => item.id != actions.payload
			);
			return newData;
		default:
			return state;
	}
};

export default todoReducers;
export type RootState = ReturnType<typeof todoReducers>;
