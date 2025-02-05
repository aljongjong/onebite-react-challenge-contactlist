import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ state, onDelete, onUpdate }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {state.map((item) => {
        return (
          <ContactItem
            key={item.id}
            {...item}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}
