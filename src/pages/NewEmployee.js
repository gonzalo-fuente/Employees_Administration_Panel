import { useState } from "react";
import Form from "../components/Form";

/* Redux */
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employees/employeesAction";

/* Router */
import { useNavigate } from "react-router-dom";

const NewEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
  });

  /* All fields are required, thus if one of the form fields is
  empty an error is triggered */
  const [fieldError, setFieldError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      employee.name === "" ||
      employee.email === "" ||
      employee.address === ""
    ) {
      setFieldError(true);
    } else {
      setFieldError(false);
      dispatch(addEmployee(employee));
      navigate("/");
    }
  };

  return (
    <Form
      employee={employee}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={fieldError}
      setError={setFieldError}
    >
      Add New Employee
    </Form>
  );
};

export default NewEmployee;
