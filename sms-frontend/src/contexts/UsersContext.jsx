import { createContext, useContext, useState } from "react";
const UsersContext = createContext();

export function UsersProvider({ children }) {
    const [signUpUser, setSignUpUser] = useState({ name: "", email: "", password: "" });
    const [loginUser, setLoginUser] = useState({email: "", password: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("sms-token")));

    const handleToken = (newToken) => {
        localStorage.setItem("sms-token", JSON.stringify(newToken));
        setToken(newToken);
    }


  const [isLogin, setIsLogin] = useState(() => {
    const storedIsLoginInfo = localStorage.getItem("isLogin");
    return storedIsLoginInfo ? JSON.parse(storedIsLoginInfo) : false;
  });


//   const arrayOfMember = (data) => {
//     const dataArray = Array.isArray(data) ? data : [data];

//     return dataArray.map((element, index) => {
//       return { ...element, id: Date.now() + index, logedIn: true };
//     });
//   };

  const values = {    
    // arrayOfMember,
    setIsLogin,
    signUpUser,
    setSignUpUser,
    loginUser,
    setLoginUser,
    isLoading,
    setIsLoading,
    handleToken,
    token
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within UsersProvider");
  }

  return context;
}
