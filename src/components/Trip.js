import React from 'react';
import { trips } from '../shapes/tripsShape';
import { useContextState, ActionTypes } from "../contexts/myTripsContext";
import "../components/trips.css"

trips.propTypes = {
  trips: trips.isRequired
}


const Trip = ({trips}) => {

    const { contextState, setContextState } = useContextState();
    const existe = contextState.trips.find(item => item.id === trips.id)

  return (
    
    <div id= "tamanocard" className="card">
      <img src={trips.img} id= "tamano" className="card-img-top" alt={trips.title} />
      <div className="card-body">
        <h5 className="card-title">{trips.title}</h5>
        <p className="card-text">{trips.description}</p>
        { existe ? (
          <button className="btn btn-success">Anotado</button>
        ) : (
          <button className="btn btn-primary" onClick={ () => setContextState({type: ActionTypes.SetTrips, value: trips})}>Anotarme</button>
        )}
      </div>
    </div>
  )
}

export default Trip;