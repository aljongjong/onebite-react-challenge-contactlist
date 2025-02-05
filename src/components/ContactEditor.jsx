import "./ContactEditor.css";
import { useState, useRef } from "react";

export default function ContactEditor({ onCreate }) {
  const [info, setInfo] = useState({
    name: "",
    contactInfo: "",
  });
  const nameRef = useRef();
  const contactInfoRef = useRef();

  const onChangeName = (e) => {
    setInfo({
      ...info,
      name: e.target.value,
    });
  };

  const onChangeContactInfo = (e) => {
    setInfo({
      ...info,
      contactInfo: e.target.value,
    });
  };

  const onSubmit = () => {
    if (info.name === "") {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
      return;
    } else if (info.contactInfo === "") {
      alert("연락처를 입력해주세요.");
      contactInfoRef.current.focus();
      return;
    }
    onCreate(info);
    setInfo({
      name: "",
      contactInfo: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          onChange={onChangeName}
          value={info.name}
          className="name"
          placeholder="이름 ..."
        />
        <input
          ref={contactInfoRef}
          onChange={onChangeContactInfo}
          value={info.contactInfo}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
