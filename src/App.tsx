import { AgGridTable } from './agGrid/AgGridTable';
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS

function App() {


  return (
    <>
    <div className="ag-theme-material" style={{ width: "100%", height: "100%" }}>
        <AgGridTable />
    </div>
    </>
  )
}

export default App
