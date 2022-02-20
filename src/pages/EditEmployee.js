import Error from "../components/Error";
import { useEffect, useState } from "react";

/* Redux */
import { useDispatch, useSelector } from "react-redux";

/* Router */
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import Loading from "../components/Loading";
import { getEmployee, editEmployee } from "../store/employees/employeesAction";

const EditEmployee = () => {
  const employee = useSelector((state) => state.employees.employee);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);

  const [editedEmployee, setEditedEmployee] = useState({
    name: "",
    email: "",
    address: "",
  });

  /* All fields are required, thus if one of the form fields is
  empty an error is triggered */
  const [fieldError, setFieldError] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee(id));
  }, []);

  useEffect(() => {
    if (employee) {
      setEditedEmployee({ ...employee });
    }
  }, [employee]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      editedEmployee.name === "" ||
      editedEmployee.email === "" ||
      editedEmployee.address === ""
    ) {
      setFieldError(true);
    } else {
      setFieldError(false);
      dispatch(editEmployee(editedEmployee));
      navigate("/");
    }
  };

  return (
    <>
      {/* Display Loading Message */}
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          {/* Error Handling */}
          {error ? (
            <Error>{`Oops... Something went Wrong! -> ${error.message}`}</Error>
          ) : (
            editedEmployee && (
              <Form
                employee={editedEmployee}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                error={fieldError}
                setError={setFieldError}
              >
                Edit Employee
              </Form>
            )
          )}
        </>
      )}
    </>
  );
};

export default EditEmployee;
