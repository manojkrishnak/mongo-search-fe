import "../App.css";


function ShowSearchResults(props) {
    console.log(props)
    return (
        <div className="flex-30 border">
            <h3 className="bold-heading">Top results for {props.usersCity}</h3>
            <ul className="all-results">
                {
                    props.results.map((result, i) => {
                        if (result.name) {
                            return (<li key={i} className="flex flex-col result">
                                <a className="row-1" onClick={props.handleSelection}>
                                    <span className="light-bold">{result.name}</span>
                                </a>
                                <div className="flex justify-bt row-2">
                                    <span>${result.price.$numberDecimal}</span>
                                    <span>{result.property_type}</span>
                                </div>
                            </li>)
                        }
                    })
                }
            </ul>
        </div>
    )

}



export default ShowSearchResults;