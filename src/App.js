import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import DataGrid from './components/DataGrid';
import CustomizeColumns from './components/CustomizeColumns';
import { dynamicHeaderRow } from './__mock__';

function App() {
  return (
    <div className="App">
      <DataGrid />
      {/*<CustomizeColumns initialColumnsData={dynamicHeaderRow} />*/}
    </div>
  );
}

export default App;
