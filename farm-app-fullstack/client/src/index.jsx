import React from 'react'
import ReactDOM from 'react-dom'

function FieldData(props) {
    return (
        <div className="border-bottom">
            <ul className="list-group list-group-flush">
                <li className="list-group-item fs-6"><strong>{props.fieldName}</strong></li>
                {Object.entries(props.fieldData).map(([key, value]) => {
                    return (
                        <li className="list-group-item"><strong>{key}:</strong> {value}</li>
                    );

                })}
            </ul>
        </div>
    )
}

function FarmCard(props) {
    return (
        <div className="col">
            <div className="card my-2">
                <div className="card-header">
                    {props.farm.name}
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>State:</strong> {props.farm.state}</li>
                        <li className="list-group-item"><strong>Soil Type:</strong> {props.farm.soil_type}</li>
                        <li className="list-group-item"><strong>Revenue:</strong> ${props.farm.revenue}</li>
                    </ul>
                    <div className="card">
                        <div className="card-header">
                            Field Data
                        </div>
                        {Object.entries(props.farm.fields).map(([fieldName, fieldData]) => {
                            return (
                                <FieldData fieldName={fieldName} fieldData={fieldData} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const App = (props) => {
    const [farmName, setFarmName] = React.useState('Farm Name');
    const [revenue, setRevenue] = React.useState(1000);
    const [farms, setFarms] = React.useState(null);
    const getFarmsByName = () => {
        fetch('http://localhost:8000/farm/search/name/' + farmName)
            .then(result => result.json())
            .then(body => setFarms(body));
    };

    const getFarmsByMinRevenue = () => {
        fetch('http://localhost:8000/farm/search/revenue/' + revenue)
            .then(result => result.json())
            .then(body => setFarms(body));
    };
    return (
        <div className="app">
            <h1 className="text-center m-5">Farm Finder</h1>
            <div>
                <input value={farmName} onChange={e => setFarmName(e.target.value)} />
                <button onClick={getFarmsByName}>Find By Name</button>
            </div>
            <div>
                <input value={revenue} onChange={e => setRevenue(e.target.value)} />
                <button onClick={getFarmsByMinRevenue}>Find By Min Revenue</button>
            </div>
            {farms && (
                Object.keys(farms).length === 0
                    ? <p>No results</p>
                    : <div className="row row-cols-1 row-cols-md-2 g-4">
                        {farms.map(farm => {
                            return (
                                <FarmCard farm={farm} />
                            );

                        })}
                      </div>
            )}
        </div>
    );
}

const appContainer = document.querySelector('#app');
ReactDOM.render(<App/>, appContainer);