import React, { createContext, useState } from "react";

export const GoodContext = createContext();

export const GoodContextProvider = (props) => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <GoodContext.Provider value={{ currImg, setCurrImg }}>
      {props.children}
    </GoodContext.Provider>
  );
};

export default GoodContextProvider;
