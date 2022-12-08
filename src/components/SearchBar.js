import { useState, useEffect } from "react";
import debounce from 'lodash.debounce';
import "./SearchBar.css";


function SearchBar(props) {
    const [city, setCity] = useState("");
    const [cityResults, setCityResults] = useState([]);

    async function fetchData(query, cb) {
        const res = await fetch(`https://mongo-search-api.onrender.com/search?q=${query}`, {
            headers: {
                "accepts": "application/json"
            }
        });
        const { data } = await res.json();
        console.log("<<", data)
        cb(data);
    }

    const debouncedFetchData = debounce((query, cb) => {
        fetchData(query, cb);
    }, 500);


    useEffect(() => {
        if (city) {
            debouncedFetchData(city, res => {
                console.log("city results", res)
                setCityResults(res)
            });
        }
    }, [city])

    const onChangeCity = (e) => {
        const input = e.target.value.trim();
        console.log(input)
        setCity(input)
    }

    const onClickOfLi = (e) => {
        console.log('e', e.target.textContent);
        const usersCity = e.target.textContent;
        props.setUsersCity(usersCity);
        setCity("");
        setCityResults([])
    }


    return (
        <div className="search-box ">
            <input
                placeholder="enter the city name"
                name="city"
                value={city}
                onChange={onChangeCity}
                className="search-bar"
                type="text"
            />

            <ul className="suggestions">
                {cityResults.length > 0 && cityResults.map((result, i) => {
                    return <li key={i} onClick={onClickOfLi}>{result._id}</li>
                })}
            </ul>
        </div>
    )
}


export default SearchBar;