import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(input);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(setInput);
  };

  const handleClick = () => {
    setSubmit(input);
  };
  return (
    <div className="inputcontainer">
      <form>
        <label htmlFor="city">City Name</label>
        <input type="text" id="city" className="cityName" onChange={handleChange} value={input} />
      </form>
      <button className="btn" onClick={handleClick}>
        Submit button
      </button>
    </div>
  );
};

export default Input;
