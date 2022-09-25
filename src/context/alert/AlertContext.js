import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initalState = null;

  const [state, dispatch] = useReducer(alertReducer, initalState);

  return (
    <AlertContext.Provider value={{ alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
