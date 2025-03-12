import { act, useReducer, useState } from "react";
import "./table.css";

const initialValue = [
  {
    id: "1",
    name: "satyam",
    course: "B.tech",
    address: "Bijnor",
    Role: "Reruiter",
    delete: "Delete",
  },
  {
    id: "2",
    name: "Mohit",
    course: "B.tech",
    address: "Mandawali",
    Role: "Sr. Reruiter",
    delete: "Delete",
  },
  {
    id: "3",
    name: "Kishor",
    course: "B.tech",
    address: "Bijnor",
    Role: "Electrical Engineer",
    delete: "Delete",
  },
  {
    id: "4",
    name: "Rohit",
    course: "B.tech",
    address: "Bijnor",
    Role: "System Engineer",
    delete: "Delete",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "Delete":
      return state.filter((itm) => itm.id !== action.payload);
    case "Add Row":
      return [
        ...state,
        {
          id: Date.now(),
          name: "",
          course: "",
          address: "",
          Role: "",
          delete: "Delete",
        },
      ];
    case "update Row":
      return state.map((row) =>
        row.id === action.payload.id
          ? {
              ...row,
              name: action.payload.name,
              course: action.payload.course,
              address: action.payload.address,
              Role: action.payload.Role,
            }
          : row
      );
    default:
      return state;
  }
}

const TableGrid = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [editRow, setEditRow] = useState(null);
  const [tempData, setTempData] = useState({
    name: "",
    course: "",
    address: "",
    role: "",
  });

  const handleUpdate = (id) => {
    dispatch({ type: "update Row", payload: { id, ...tempData } });
    setEditRow(null);
  };

  const handleEdit = (itm) => {
    setEditRow(itm.id);
    setTempData({ ...itm });
  };

  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Dynamic Table with Add, Update & Delete</h2>
      <button onClick={() => dispatch({ type: "Add Row" })}>Add More</button>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>Address</th>
          <th>Role</th>
          <th>Delete</th>
        </tr>

        {state.map((itm) => (
          <tr>
            <td>{itm.id}</td>
            <td>
              {editRow === itm.id ? (
                <input
                  value={tempData.name}
                  type="text"
                  onChange={handleChange}
                  name="name"
                />
              ) : (
                itm.name
              )}
            </td>
            <td>
              {editRow === itm.id ? (
                <input
                  value={tempData.course}
                  type="text"
                  onChange={handleChange}
                  name="course"
                />
              ) : (
                itm.course
              )}
            </td>
            <td>
              {editRow === itm.id ? (
                <input
                  value={tempData.address}
                  type="text"
                  name="address"
                  onChange={handleChange}
                />
              ) : (
                itm.address
              )}
            </td>
            <td>
              {editRow === itm.id ? (
                <input
                  value={tempData.role}
                  type="text"
                  onChange={handleChange}
                  name="Role"
                />
              ) : (
                itm.Role
              )}
            </td>
            <td>
              <button
                onClick={() => dispatch({ type: "Delete", payload: itm.id })}
              >
                {itm.delete}
              </button>
            </td>
            <td>
              {editRow === itm.id ? (
                <button onClick={() => handleUpdate(itm.id)}>Update</button>
              ) : (
                <button onClick={() => handleEdit(itm)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default TableGrid;
