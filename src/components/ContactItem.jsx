import "./ContactItem.css";
import { useState, memo } from "react";
import EditableItem from "./EditableItem";
import ReadableItem from "./ReadableItem";

export default memo(function ContactItem({ onDelete, onUpdate, ...props }) {
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
          {...props}
          onClickUpdateButton={onClickUpdateButton}
          onClickUpdateCancelButton={onClickUpdateCancelButton}
        />
      ) : (
        <ReadableItem
          {...props}
          onDelete={onDelete}
          onClickUpdateButton={onClickUpdateButton}
        />
      )}
    </div>
  );
});
