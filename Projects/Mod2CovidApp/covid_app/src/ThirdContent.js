import React, { useState, useEffect } from 'react';


function ThirdContent() {

    const [vaccineState, setVaccineState] = useState('');
    const [vaccineCity, setVaccineCity] = useState('');
    const [component, setComponent] = useState([]);


    const handleSubmit= (e) => {
        e.preventDefault();
        findVaccine(vaccineCity, vaccineState)
    }

    // const addStuff = (stuff) => {
    //     let stuffs = [...combined, stuff];
    //     setCombined(stuffs);
    //   }


// const getStatesData = async () => {
// await fetch ("https://api.covidactnow.org/v2/states.json?apiKey=2cf3054f5c1243c5a8621daf03f129e6")
// .then ((response) => response.json())
// .then ((data) => {
// const information = data.map((info) => (
// {
// name: info.state,
// value: info.state,
// }));
// setVaccines(information);
// })
// }
    
    const findVaccine = async (vaccineCity, vaccineState) => {
        await fetch(`https://data.cdc.gov/resource/5jp2-pgaw.json?loc_admin_state=${vaccineState}&loc_admin_city=${vaccineCity}`)
        .then(response => response.json())
        .then(data => setComponent(data))
    }
console.log(component)

    return (
        <div className="vaccinePage">
            <h1 className="secondHead">Get A Vaccine Today!!!</h1><br/>
            <form className="formSheet" onSubmit={handleSubmit}>
                <div className="input">
                    <input type="text" name="vaccineState" className="state" placeholder="State" id='state' value={vaccineState} onChange={e => setVaccineState(e.target.value)} required />
                </div>
                <div className="input">
                    <input type="text" name="vaccineCity" className="city" placeholder="City" id='city' value={vaccineCity} onChange={e => setVaccineCity(e.target.value)} required />
                </div>
                <button type="submit" className="formButton"> Submit </button>
            </form>
            {component.map((item,index) => (

                    <div key={index} className="results">
                        {item.in_stock ? (
                        <ul  className="itemList">
                        <li>Location Name: {item.loc_name} <br/> Medication: {item.med_name} <br/> Location Address:{item.loc_admin_street1} <br/> <span className="inStock">Medication Available</span>
                        </li>
                        </ul>
                        ):(
                            <ul  className="itemList">
                        <li>Location Name: {item.loc_name} <br/> Medication: {item.med_name} <br/> Location Address:{item.loc_admin_street1} <br/> <span className="outStock">Medication Not Available</span>
                        </li>
                        </ul>
                        )}

                    </div>
            ))}
        </div>
    )
}

export default ThirdContent


