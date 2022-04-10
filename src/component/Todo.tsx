import Todo from "../model/todo";
import EachTodo from "./EachTodo";

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
	props
) => {
	return (
		<ul className="flex flex-col w-8/12 mt-8 mx-auto align-center ">
			{props.items.map((item) => (
				<EachTodo
					removeTodo={() => props.removeTodo(item.id)}
					key={item.id}
					text={item.text}
				/>
			))}
		</ul>
	);
};

export default Todos;
