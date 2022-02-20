/* Axios */
import axios from "axios";

const URL = "https://json-server-gonz4-web-designs.herokuapp.com/employees";

/* GET ALL THE EMPLOYEES */
export const getEmployees = () => async (dispatch) => {
  dispatch({ type: "employees/getEmployees/pending" });

  try {
    const response = await axios.get(URL /* + "?_limit=10"*/);
    return dispatch({
      type: "employees/getEmployees/succeeded",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "employees/getEmployees/rejected", payload: error });
  }
};

/* GET SINGLE EMPLOYEE BASED ON ID */
export const getEmployee = (id) => async (dispatch) => {
  dispatch({ type: "employees/getEmployee/pending" });

  try {
    const response = await axios.get(`${URL}/${id}`);
    return dispatch({
      type: "employees/getEmployee/succeeded",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "employees/getEmployee/rejected", payload: error });
  }
};

/* ADD AN EMPLOYEE */
export const addEmployee = (employee) => async (dispatch) => {
  dispatch({ type: "employees/addEmployee/pending" });

  try {
    const response = await axios.post(URL, employee);
    dispatch(getEmployees());
    return dispatch({
      type: "employees/addEmployee/succeeded",
    });
  } catch (error) {
    dispatch({ type: "employees/addEmployee/rejected", payload: error });
  }
};

/* EDIT EMPLOYEE BASED ON EMPLOYEE INFORMATION */
export const editEmployee = (employee) => async (dispatch) => {
  dispatch({ type: "employees/editEmployee/pending" });

  try {
    const response = await axios.put(`${URL}/${employee.id}`, employee);
    dispatch(getEmployees());
    return dispatch({
      type: "employees/editEmployee/succeeded",
    });
  } catch (error) {
    dispatch({ type: "employees/editEmployee/rejected", payload: error });
  }
};

/* DELETE AN EMPLOYEE */
export const deleteEmployee = (id) => async (dispatch) => {
  dispatch({ type: "employees/deleteEmployee/pending" });

  try {
    const response = await axios.delete(`${URL}/${id}`);
    dispatch(getEmployees());
    return dispatch({
      type: "employees/deleteEmployee/succeeded",
    });
  } catch (error) {
    dispatch({ type: "employees/deleteEmployee/rejected", payload: error });
  }
};
