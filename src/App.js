import React, {Component} from 'react';
import './App.css';
import 'ag-grid-enterprise';
import {AgGridReact} from 'ag-grid-react';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    onGridReady = params => {
        this.api = params.api;
        this.columnApi = params.columnApi;
    };

    handleSelectAll = event => {
        this.api.selectAll()
    };

    handleDeselectAll = event => {
        this.api.deselectAll()
    };

    render() {
        return (
            <div>
                <button id="selectAll" onClick={this.handleSelectAll}>Select All Rows</button>
                <button id="deSelectAll" onClick={this.handleDeselectAll}>Deselect All Rows</button>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '500px',
                        width: '600px'
                    }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onGridReady={this.onGridReady}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

export default App;