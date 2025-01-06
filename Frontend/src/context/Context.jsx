import React, { createContext, useState } from "react";
export const userDataContext = createContext();

//wrap the whole application in context file
const Context = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });
  return (
    <div>
      <userDataContext.Provider value={user}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default Context;
