import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ filter, onFilter }) {
	const searchInputId = useId();

	return (
		<div className={css.searchBoxContainer}>
			<label htmlFor={searchInputId}>Find contacts by name</label>
			<input
				className={css.input}
				type="text"
				id={searchInputId}
				name="query"
				value={filter}
				onChange={(e) => onFilter(e.target.value)}
			/>
		</div>
	);
}
