import { useState } from "react";

const initalValue = [
  {
    id: "1",
    name: "satyam",
    age: 27,
    address: "Bijnor",
    Role: "Software Developer",
    delete: "Delete",
  },
  {
    id: "2",
    name: "Mohit",
    age: 26,
    address: "Bijnor",
    Role: "Junior Developer",
    delete: "Delete",
  },
  {
    id: "3",
    name: "Kishor",
    age: 27,
    address: "Bijnor",
    Role: "System Engineer",
    delete: "Delete",
  },
  {
    id: "4",
    name: "Himanshu",
    age: 26,
    address: "Bijnor",
    Role: "Azure Data Engineer",
    delete: "Delete",
  },
  {
    id: "5",
    name: "Mukul",
    age: 29,
    address: "Bijnor",
    Role: "Cordinator",
    delete: "Delete",
  },
];
const StudentGrid = () => {
  const [studentData, setStundentData] = useState(initalValue);
  const [editRow, setEditRow] = useState(null);
  const [tempData, setTemData] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
    Role: "",
    delete: "",
  });

  const handleDelete = (row) => {
    setStundentData(studentData.filter((itm) => itm.id !== row));
  };

  const handleAddRow = () => {
    setStundentData([
      ...studentData,
      {
        id: String(Date.now()),
        name: "",
        age: "",
        address: "",
        Role: "",
        delete: "Delete",
      },
    ]);
  };

  const handleEdit = (itm) => {
    console.log(itm);
    setEditRow(itm.id);
    setTemData({ ...itm });
  };

  const handleUpdate = (row) => {
    console.log(row.id);
    setStundentData(
      studentData.map((itm) =>
        itm.id === row.id ? { ...itm, ...tempData } : itm
      )
    );
    setEditRow(null);
  };

  const handleChange = (e) => {
    setTemData({ ...tempData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button onClick={handleAddRow}>Add a New Row</button>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Role</th>
          <th>Delete</th>
          <th>Add/Update</th>
        </tr>
        {studentData.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>
              {editRow === row.id ? (
                <input
                  type="text"
                  name="name"
                  value={tempData.name}
                  onChange={handleChange}
                />
              ) : (
                row.name
              )}
            </td>
            <td>
              {editRow === row.id ? (
                <input
                  type="text"
                  name="age"
                  value={tempData.age}
                  onChange={handleChange}
                />
              ) : (
                row.age
              )}
            </td>
            <td>
              {editRow === row.id ? (
                <input
                  type="text"
                  value={tempData.address}
                  name="address"
                  onChange={handleChange}
                />
              ) : (
                row.address
              )}
            </td>
            <td>
              {editRow === row.id ? (
                <input
                  type="text"
                  value={tempData.Role}
                  name="Role"
                  onChange={handleChange}
                />
              ) : (
                row.Role
              )}
            </td>
            <td>
              <button onClick={() => handleDelete(row.id)}>{row.delete}</button>
            </td>
            <td>
              {editRow === row.id ? (
                <button onClick={() => handleUpdate(row)}>Update</button>
              ) : (
                <button onClick={() => handleEdit(row)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default StudentGrid;
