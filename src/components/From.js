import { useState } from "react";

const From = () => {
  return (
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
      <input type="text" id="salary" className="nameInput" />
      <label htmlFor="mobile" className="mobile">
        Mobile
      </label>
      <input type="tel" id="mobile" className="salaryInput" />
      <label htmlFor="profile" className="profile">
        Profile Pic
      </label>
      <input type="file" id="profile" className="fileInput" />
      <button className="btn">Submit button</button>
    </div>
  );
};
export default From;
