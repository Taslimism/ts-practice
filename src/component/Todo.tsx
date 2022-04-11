import Todo from "../model/todo";
import EachTodo from "./EachTodo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul className="flex flex-col w-8/12 mt-8 mx-auto align-center ">
			{props.items.map((item) => (
				<EachTodo key={item.id} text={item.text} id={item.id} />
			))}
		</ul>
	);
};

export default Todos;
