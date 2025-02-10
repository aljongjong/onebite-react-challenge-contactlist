import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

const mockData = [
  {
    id: 0,
    name: "나일론",
    contact: "techno_king@tesla.com",
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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);

  const onCreate = useCallback((info) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: info.name,
        contact: info.contact,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const onUpdate = useCallback((updateInfo) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: updateInfo.id,
        name: updateInfo.name,
        contact: updateInfo.contact,
        date: new Date().getTime(),
      },
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete, onUpdate };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={state}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
