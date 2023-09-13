import React, { useState, useEffect } from "react";

export const useAuth = (jwt) => {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    if (jwt.length > 25) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []); // los corchetes es para que se ejecute al menos 1 vez
  return isAuth;
};
