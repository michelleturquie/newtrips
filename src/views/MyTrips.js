import React from "react";
import { useContextState } from "../contexts/myTripsContext";

const MyTrips = () => {

    const { contextState } = useContextState();

    return (
        <div className="container">
        <div className="row">
            {
            contextState.trips.map(trips => (
                <div key={trips.id} className="col-sm-4">
                <div className="card">
                    <img src={trips.img} className="card-img-top" alt={trips.title} />
                    <div className="card-body">
                    <h5 className="card-title">{trips.title}</h5>
                    <p className="card-text">{trips.description}</p>
                    </div>
                </div>
                </div>
            ))
            }
        </div>
        </div>
    );
};

export default MyTrips;