import Error from "./Error";

/* Router */
import { Link } from "react-router-dom";

const Form = ({
  children,
  employee,
  handleChange,
  handleSubmit,
  error,
  setError,
}) => {
  const { name, email, address } = employee;

  return (
    <div className="w-50 bg-light mx-auto mb-5 rounded p-3 shadow">
      <h3>{children}</h3>
      {error && (
        <Error setError={setError}>
          All fields are <strong>MANDATORY !!!</strong>
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid col-12">
          <button className="btn btn-outline-success mb-3">Submit</button>
          <Link to="/" className="btn btn-outline-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
