import "./ContactEditor.css";
import { useState, useRef, memo, useContext } from "react";
import { ContactDispatchContext } from "../App";

export default function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext);
  const [info, setInfo] = useState({
    name: "",
    contact: "",
  });
  const nameRef = useRef();
  const contactRef = useRef();

  const onChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (info.name === "") {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
      return;
    } else if (info.contact === "") {
      alert("연락처를 입력해주세요.");
      contactRef.current.focus();
      return;
    }
    onCreate(info);
    setInfo({
      name: "",
      contact: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          onChange={onChangeInfo}
          value={info.name}
          className="name"
          name="name"
          placeholder="이름 ..."
        />
        <input
          ref={contactRef}
          onChange={onChangeInfo}
          value={info.contact}
          className="contact"
          name="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
