import "./ContactItem.css";
import { useState } from "react";

export default function ContactItem({
  id,
  name,
  contactInfo,
  date,
  onDelete,
  onUpdate,
}) {
  const [updateInfo, setUpdateInfo] = useState({
    id: id,
    name: name,
    contactInfo: contactInfo,
    date: date,
  });
  const [isUpdate, setIsUpdate] = useState(false);

  const onClickUpdateButton = () => {
    if (!isUpdate) {
      setIsUpdate(!isUpdate);
    } else {
      onUpdate(updateInfo);
      setIsUpdate(!isUpdate);
    }
  };
  const onClickUpdateCancelButton = () => {
    setIsUpdate(false);
  };

  const onClickDeleteButton = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      onDelete(id);
    }
  };

  const onChangeName = (e) => {
    setUpdateInfo({
      ...updateInfo,
      name: e.target.value,
    });
  };
  const onChangeContactInfo = (e) => {
    setUpdateInfo({
      ...updateInfo,
      contactInfo: e.target.value,
    });
  };

  return (
    <div className="ContactItem">
      {isUpdate ? (
        <>
          <div className="name">
            <input onChange={onChangeName} value={updateInfo.name} />
          </div>
          <div className="contact">
            <input
              onChange={onChangeContactInfo}
              value={updateInfo.contactInfo}
            />
          </div>
          <button onClick={onClickUpdateButton}>✅ Save</button>
          <button onClick={onClickUpdateCancelButton}>🚫 Cancel</button>
        </>
      ) : (
        <>
          <div className="name">{name}</div>
          <div className="contact">{contactInfo}</div>
          <button onClick={onClickUpdateButton}>🔧 Update</button>
          <button onClick={onClickDeleteButton}>🗑️ Remove</button>
        </>
      )}
    </div>
  );
}
