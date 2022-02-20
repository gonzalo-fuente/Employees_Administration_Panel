import Employee from "../components/Employee";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { getEmployees } from "../store/employees/employeesAction";
import { useEffect } from "react";

/* Redux */
import { useSelector, useDispatch } from "react-redux";

/* Router */
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="bg-light mb-5 rounded p-3 shadow">
      <div className="d-flex justify-content-between mb-3 px-3">
        <h3>Employees List</h3>
        <Link to="/addemployee" className="btn btn-outline-primary">
          Add New
        </Link>
      </div>
      {/* Display Loading Message */}
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          {/* Error Handling */}
          {error ? (
            <Error>{`Oops... Something went Wrong! -> ${error.message}`}</Error>
          ) : (
            /* Display Employees List */
            <>
              {employees.length === 0 ? (
                <h4 className="text-danger fst-italic">
                  There's no Employees Left
                </h4>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => (
                        <Employee employee={employee} key={employee.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EmployeesList;
