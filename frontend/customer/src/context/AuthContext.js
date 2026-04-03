import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

export function AuthContextProvider({children}) {
  const [auth, setAuth] = useState({user: null});
  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
