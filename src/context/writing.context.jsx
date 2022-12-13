import { createContext, useState } from "react";

const WritingContext = createContext();

const WritingProviderWrapper = props => {

  const [myWriting, setMyWriting] = useState('hello from context')

  return (
    <WritingContext.Provider value={{ myWriting, setMyWriting }}>
      {props.children}
    </WritingContext.Provider>
  );
}

export { WritingContext, WritingProviderWrapper };