import { createContext } from "react";
import { useReducer } from "react";

// export const ToDoContext = createContext({
//   text : [],
//   setNewValue : () => {},
//   deletefromlist : () => {},
// });
export const ToDoContext = createContext({});

const ToDoContextProvider = ({ children }) => {
  const changevalue = (curtext, action) => {
    let newtext = curtext;
    if (action.type === "Add_item") {
      newtext = [...curtext, action.payload.val];
    } else if (action.type === "delete_item") {
      newtext = [...curtext];
      newtext.splice(action.payload.index, 1);
    }
    return newtext;
  };

  let [text, disapatchText] = useReducer(changevalue, []);

  const setNewValue = (val) => {
    const adddata = {
      type: "Add_item",
      payload: {
        val,
      },
    };
    disapatchText(adddata);
  };

  const deletefromlist = (index) => {
    const deleteData = {
      type: "delete_item",
      payload: {
        index,
      },
    };
    disapatchText(deleteData);
  };

  return (
    <ToDoContext.Provider value={{ text, setNewValue, deletefromlist }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
