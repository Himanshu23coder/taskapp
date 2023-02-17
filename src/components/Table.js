import React from "react";

const Table = ({
  input,
  setInput,
  salary,
  setSalary,
  mobile,
  setMobile,
  profile,
  setProfile,
}) => {
  console.log(input);
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Mobile</th>
            <th>Profile Picture</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{input.id}</td>
            <td>{input}</td>
            <td>{salary}</td>
            <td>{mobile}</td>
            <td>{profile}</td>
            <td>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
// i am facing a network problem i hope you understand

export default Table;
