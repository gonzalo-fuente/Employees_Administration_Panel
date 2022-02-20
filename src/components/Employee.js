import DeleteEmployee from "./DeleteEmployee";

/* Router */
import { Link } from "react-router-dom";

const Employee = ({ employee }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>
        <Link
          to={`addemployee/${employee.id}`}
          className="btn btn-outline-secondary"
        >
          Edit
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          data-bs-toggle="modal"
          data-bs-target={"#staticBackdrop" + employee.id}
        >
          Delete
        </button>
        <DeleteEmployee id={employee.id} />
      </td>
    </tr>
  );
};

export default Employee;
