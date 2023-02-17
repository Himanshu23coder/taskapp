import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(input);
  const [salary, setSalary] = useState(0);
  const [mobile, setMobile] = useState("");
  const [profile, setProfile] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(setInput);
  };

  const handleClick = () => {
    setSubmit(input);
    setSubmit(salary);
  };
  return (
    <div className="App">
      <div className="inputcontainer">
        <form>
          <label htmlFor="city">City Name</label>
          <input
            type="text"
            id="city"
            className="cityName"
            onChange={handleChange}
            value={input}
          />
        </form>
        <button className="btn" onClick={handleClick}>
          Submit button
        </button>
      </div>
      <div className="FormContainer">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="nameInput" />
        <label htmlFor="city" className="city">
          City
        </label>
        <select name="city" id="city">
          <option value="Vasna">Vasna</option>
          <option value="Narol">Narol</option>
          <option value="Chandkheda">Chandkheda</option>
          <option value="Vatva">Vatva</option>
        </select>
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          className="nameInput"
          onChange={handleChange}
        />
        <label htmlFor="mobile" className="mobile" onChange={handleChange}>
          Mobile
        </label>
        <input type="tel" id="mobile" className="salaryInput" />
        <label htmlFor="profile" className="profile">
          Profile Pic
        </label>
        <input type="file" id="profile" className="fileInput" />
        <button className="btn">Submit button</button>
      </div>
      <Table
        input={input}
        setInput={setInput}
        salary={salary}
        setSalary={setSalary}
        mobile={mobile}
        setMobile={setMobile}
        profile={profile}
        setProfile={setProfile}
      />
    </div>
  );
}

export default App;
