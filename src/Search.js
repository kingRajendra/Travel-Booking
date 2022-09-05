import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Card } from 'antd';


function Search() {
    const { countries, setCountries } = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);

    useEffect(() => {
        const loadCountries = async () => {
            const response = await axios.get("https://restcountries.com/v3.1/currency/dollar");
            setCountries(response.data);
        };

        loadCountries();
    }, [setCountries]);

    console.log(countries);

    const searchCountries = (text) => {
        let matches = countries.filter((country) => {
            const regex = new RegExp(`${text}`, 'gi');
            return country.name.match(regex) || country.capital.match(regex);
        });
        setCountryMatch(matches);
    };

    return (
        <div className="App">
            <h2>Search Destination</h2>
            <Input
                style={{ width: "40%", margin: "10px" }}
                placeholder="Enter Country or Capital Name"
                onChange={(e) => searchCountries(e.target.value)} />
            {countryMatch && countryMatch.map((item, index) => (
                <div key={index} style={{ marginLeft: '35%', marginTop: "5px" }}>
                    <Card style={{ width: "50%" }} title={`Country: ${item.name}`}>
                        Capital: {item.capital}
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Search;
