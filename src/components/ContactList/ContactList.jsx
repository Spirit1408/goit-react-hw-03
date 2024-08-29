import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ data, onDelete }) {
	return (
		<ul className={css.contactList}>
			{data.length === 0 ? (
				<p>No contacts</p>
			) : (
				data.map((item) => (
					<li key={item.id}>
						<Contact data={item} onDelete={onDelete} />
					</li>
				))
			)}
		</ul>
	);
}
