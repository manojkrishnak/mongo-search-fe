import "../App.css"
export default function ShowEachResultsInfo({ info }) {

    return (
        <div className="flex-78 each-result-info border flex justify-bt">

            <ul >
                <li><span className="bold">Name:</span> {info.name || ""}</li>
                <li><span className="bold">Description:</span> {info.summary || ""}</li>
                <li><span className="bold">Property type:</span> {info.property_type || ""}</li>
                <li><span className="bold">Room type:</span> {info.room_type || ""}</li>
                <li><span className="bold">Minimum nights:</span> {info.minimum_nights || ""}</li>
                <li><span className="bold">Maximum nights:</span> {info.maximum_nights || ""}</li>
                <li><span className="bold">Accommodates:</span> {info.accommodates || ""}</li>
                <li><span className="bold">Bedrooms:</span> {info.bedrooms || ""}</li>
                <li><span className="bold">Beds:</span> {info.beds || ""}</li>
                <li><span className="bold">Host info:</span> <a target="_blank" href={info.host && info.host.host_url || ""}>{info.host && info.host.host_name}</a></li>
                <li><span className="bold">Street: </span> {(info.address && info.address.street) || ""}</li>
                <li><span className="bold">Market:</span> {(info.address && info.address.market) || ""}</li>
                <li><span className="bold">Country:</span> {(info.address && info.address.country) || ""}</li>
            </ul>
            {info.images && <img src={info.images.picture_url} className="listing-image" />}
        </div>
    )
}
