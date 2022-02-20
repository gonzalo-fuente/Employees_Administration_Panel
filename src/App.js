import EmployeesList from "./pages/EmployeesList";
import NewEmployee from "./pages/NewEmployee";
import EditEmployee from "./pages/EditEmployee";

/* Router */
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    /* Replace the BrowserRouter with HashRouter in order to deploy
    to GitHub Pages */
    <HashRouter>
      <div className="App container">
        <h2 className="mt-3 mb-5">Employees Administration Panel</h2>
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="addemployee" element={<NewEmployee />} />
          <Route path="addemployee/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
