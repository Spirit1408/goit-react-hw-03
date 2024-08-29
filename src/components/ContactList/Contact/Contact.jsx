import css from "./Contact.module.css";
import { IoMdContact as UserIcon } from "react-icons/io";
import { FaPhone as PhoneIcon } from "react-icons/fa";

export default function Contact({ data, onDelete }) {
	return (
		<div className={css.contactCard}>
			<div className={css.contactCardInfo}>
				<div className={css.text}>
					<UserIcon size={15} />
					<p className={css.text}>{data.name}</p>
				</div>

				<div className={css.text}>
					<PhoneIcon size={15} />
					<p className={css.text}>{data.number}</p>
				</div>
			</div>

			<button
				className={css.button}
				onClick={() => onDelete(data.id)}
				type="button"
			>
				Delete
			</button>
		</div>
	);
}
