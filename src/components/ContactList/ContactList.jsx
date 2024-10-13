import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="list">
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact {...contact} onDelete={() => onDelete(contact.id)} />
        </li>
      ))}
    </ul>
  );
}
