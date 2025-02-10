import { useContext } from "react";
import { ContactDispatchContext } from "../../App";

const ReadableItem = ({ id, name, contact, date, onClickUpdateButton }) => {
  const { onDelete } = useContext(ContactDispatchContext);

  const onClickDeleteButton = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      onDelete(id);
    }
  };

  return (
    <>
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickUpdateButton}>🔧 Update</button>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </>
  );
};

export default ReadableItem;
