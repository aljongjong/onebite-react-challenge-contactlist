import "./contact-item.css";
import { useState, memo, useContext } from "react";
import EditableItem from "./editable-item";
import ReadableItem from "./readable-item";
import { ContactDispatchContext } from "../../App";

export default memo(function ContactItem({ ...state }) {
  const { onUpdate } = useContext(ContactDispatchContext);

  const [isUpdate, setIsUpdate] = useState(false);

  const onClickUpdateButton = (updateInfo) => {
    if (isUpdate) {
      onUpdate(updateInfo);
    }
    setIsUpdate(!isUpdate);
  };

  const onClickUpdateCancelButton = () => {
    setIsUpdate(false);
  };

  return (
    <div className="ContactItem">
      {isUpdate ? (
        <EditableItem
          {...state}
          onClickUpdateButton={onClickUpdateButton}
          onClickUpdateCancelButton={onClickUpdateCancelButton}
        />
      ) : (
        <ReadableItem {...state} onClickUpdateButton={onClickUpdateButton} />
      )}
    </div>
  );
});
