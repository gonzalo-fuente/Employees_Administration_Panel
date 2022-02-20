import EmployeesList from "./pages/EmployeesList";
import NewEmployee from "./pages/NewEmployee";
import EditEmployee from "./pages/EditEmployee";

/* Router */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h2 className="mt-3 mb-5">Employees Administration Panel</h2>
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="addemployee" element={<NewEmployee />} />
          <Route path="addemployee/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
