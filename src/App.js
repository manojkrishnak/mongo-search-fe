import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ShowSearchResults from "./components/ShowSearchResults";
import ShowEachResultsInfo from "./components/ShowEachResultInfo";
import "./App.css";

function App() {
  const [usersCity, setUsersCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userWantsToKnow, setUserWantsToKnow] = useState([]);
  const [placesOperatingAt, setPlacesOperatingAt] = useState([]);

  const fetchStaysInThatCity = async () => {
    const res = await fetch(`https://mongo-search-api.onrender.com/search-selected-city?city=${usersCity}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
    });
    const { data } = await res.json();
    console.log("<<", data)
    setSearchResults(data)
  }

  const fetchOperatingAt = async () => {
    const res = await fetch(`https://mongo-search-api.onrender.com/operating-at`, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
    });
    const { data } = await res.json();
    console.log("<<", data)
    setPlacesOperatingAt(data)
  }

  const handleSelection = (e) => {
    console.log(e);
    const selectedInput = e.target.textContent;
    const res = searchResults.filter(res => res.name === selectedInput);
    console.log("filter", res)
    setUserWantsToKnow(res[0])
  }

  useEffect(() => {
    if (usersCity) {
      fetchStaysInThatCity()
    }
    fetchOperatingAt()
  }, [usersCity])


  return (
    <div className="App">
      <header className="header flex">
        <a href="#" className="logo">
          <h1>skybnb</h1>
        </a>
        <SearchBar setUsersCity={setUsersCity} />
      </header>
      <div className="city-names-box">
        <p className="city-names">
          Currently we are operating at  &nbsp;
          {
            placesOperatingAt.filter(place => place !== "").join(", ")
          }
        </p>
      </div>


      <div className="flex justify-bt info">

        <ShowEachResultsInfo
          info={userWantsToKnow}
        />

        {searchResults ?
          <ShowSearchResults
            results={searchResults}
            usersCity={usersCity}
            handleSelection={handleSelection}
          /> : <p>Search something</p>
        }
      </div>
    </div>
  );
}

export default App;
