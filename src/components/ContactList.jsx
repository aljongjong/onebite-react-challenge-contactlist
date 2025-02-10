import "./ContactList.css";
import ContactItem from "./contact-item";
import { useContext } from "react";
import { ContactStateContext } from "../App";

export default function ContactList() {
  const state = useContext(ContactStateContext);

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {state.map((item) => {
        return <ContactItem key={item.id} {...item} />;
      })}
    </div>
  );
}
