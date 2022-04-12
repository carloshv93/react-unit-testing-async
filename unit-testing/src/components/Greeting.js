import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [hasTextChanged, setHasTextChanged] = useState(false);

  const changeTextHandler = () => {
    setHasTextChanged(!hasTextChanged);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!hasTextChanged && <Output>It's good to see you!</Output>}
      {hasTextChanged && <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
