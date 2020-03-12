import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import DataGrid from './components/DataGrid';
import CustomizeColumns from './components/CustomizeColumns';
import FilterSearch from './components/FilterSearch';

function App() {
  return (
    <div className="App">
      <DataGrid />
    </div>
  );
}

export default App;
