import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

const initialState = {
  email: "",
  name: "",
  photoURL: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      return { ...initialState };
    default:
      return { ...initialState };
  }
};
export const AuthProvider = ({ children }) => {
  const [state, AuthDispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={[state, AuthDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
