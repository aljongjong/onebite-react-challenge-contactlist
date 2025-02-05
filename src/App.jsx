import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef, useReducer } from "react";

const mockData = [
  {
    id: 0,
    name: "나일론",
    contactInfo: "techno_king@tesla.com",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);

  const onCreate = (info) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: info.name,
        contactInfo: info.contactInfo,
        date: new Date().getTime(),
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  const onUpdate = (updateInfo) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: updateInfo.id,
        name: updateInfo.name,
        contactInfo: updateInfo.contactInfo,
        date: new Date().getTime(),
      },
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList state={state} onDelete={onDelete} onUpdate={onUpdate} />
      </section>
    </div>
  );
}

export default App;
