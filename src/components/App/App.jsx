import { useEffect, useState } from "react";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import contactsData from "../contacts.json";

export default function App() {
	const [contacts, setContacts] = useState(() => {
		const savedContacts = localStorage.getItem("contacts");
		return savedContacts ? JSON.parse(savedContacts) : contactsData;
	});

	const [filter, setFilter] = useState("");

	useEffect(
		() => localStorage.setItem("contacts", JSON.stringify(contacts)),
		[contacts],
	);

	const addContact = (newContact) => {
		setContacts((prevContacts) => [...prevContacts, newContact]);
	};

	const deleteContact = (contactId) => {
		setContacts((prevContacts) =>
			prevContacts.filter((contact) => contact.id !== contactId),
		);
	};

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase()),
	);

	return (
		<div className={css.app}>
			<h1 className={css.title}>Phonebook</h1>
			<ContactForm onAdd={addContact} />
			<SearchBox fliter={filter} onFilter={setFilter} />
			<ContactList data={filteredContacts} onDelete={deleteContact} />
		</div>
	);
}
