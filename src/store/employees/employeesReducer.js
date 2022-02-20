const initialState = {
  employees: [],
  employee: {},
  status: "idle",
  error: null,
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "employees/getEmployees/pending":
    case "employees/getEmployee/pending":
    case "employees/addEmployee/pending":
    case "employees/editEmployee/pending":
    case "employees/deleteEmployee/pending":
      return { ...state, status: "loading" };

    case "employees/getEmployees/succeeded":
      return {
        ...state,
        status: "succeeded",
        employees: action.payload,
        error: null,
      };

    case "employees/getEmployee/succeeded":
      return {
        ...state,
        status: "succeeded",
        employee: action.payload,
        error: null,
      };

    case "employees/addEmployee/succeeded":
    case "employees/editEmployee/succeeded":
    case "employees/deleteEmployee/succeeded":
      return { ...state, status: "succeeded", error: null };

    case "employees/getEmployees/rejected":
    case "employees/getEmployee/rejected":
    case "employees/addEmployee/rejected":
    case "employees/editEmployee/rejected":
    case "employees/deleteEmployee/rejected":
      return { ...state, status: "failed", error: action.payload };

    default:
      return state;
  }
};
