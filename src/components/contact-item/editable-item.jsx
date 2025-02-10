import { useState } from "react";

const EditableItem = ({
  id,
  name,
  contact,
  date,
  onClickUpdateButton,
  onClickUpdateCancelButton,
}) => {
  const [updateInfo, setUpdateInfo] = useState({
    id: id,
    name: name,
    contact: contact,
    date: date,
  });

  const onChangeUpdateInfo = (e) => {
    setUpdateInfo({
      ...updateInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="name">
        <input
          name="name"
          onChange={onChangeUpdateInfo}
          value={updateInfo.name}
        />
      </div>
      <div className="contact">
        <input
          name="contact"
          onChange={onChangeUpdateInfo}
          value={updateInfo.contact}
        />
      </div>
      <button
        onClick={() => {
          onClickUpdateButton(updateInfo);
        }}
      >
        ✅ Save
      </button>
      <button onClick={onClickUpdateCancelButton}>🚫 Cancel</button>
    </>
  );
};

export default EditableItem;
