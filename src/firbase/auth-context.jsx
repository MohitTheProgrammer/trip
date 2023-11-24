import React from "react";

const AuthContext = React.createContext({
    isLogin: false,
    user: {},
    logOut: () => {},
})

export default AuthContext;