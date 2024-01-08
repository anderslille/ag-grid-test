import {
    useCallback,
    useMemo,
    useState,
  } from 'react';
  import { AgGridReact } from 'ag-grid-react';
  import 'ag-grid-enterprise';
  
  

  //import 'ag-grid-community/styles/ag-grid.css';
  //import 'ag-grid-community/styles/ag-theme-quartz.css';
  import {
    ColDef,
  } from 'ag-grid-community';
  import { IOlympicData } from './interfaces';
  

  export const AgGridTable = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState<IOlympicData[]>();
    const columnDefs:ColDef[] = useMemo(()=>{
        return [
            { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
            { field: 'age' },
            { field: 'country', minWidth: 180 },
            { field: 'year' },
            { field: 'date', minWidth: 150 },
            { field: 'gold' },
            { field: 'silver' },
            { field: 'bronze' },
            { field: 'total' },
          ]
    }, []);
    
    const defaultColDef = useMemo<ColDef>(() => {
      return {
        flex: 1,
        minWidth: 100,
        // allow every column to be aggregated
        enableValue: true,
        // allow every column to be grouped
        enableRowGroup: true,
        // allow every column to be pivoted
        enablePivot: true,
        filter: true,
      };
    }, []);
  
    const onGridReady = useCallback(() => {
      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data: IOlympicData[]) => setRowData(data));
    }, []);
  
    return (
      <div style={containerStyle}>
        <div
          style={gridStyle}
          className={
            "ag-theme-quartz-dark"
          }
        >
          <AgGridReact<IOlympicData>
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            sideBar={'filters'}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    );
  };
  


