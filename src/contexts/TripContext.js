import React from 'react';
import products from '../products.json';

export const TripsContext = React.createContext();

const TripProvider = (props) => {
    const [trips, setTrips] = React.useState(products);


    return <TripsContext.Provider value={{trips, setTrips}}>{props.children}</TripsContext.Provider>
}

export default TripProvider;