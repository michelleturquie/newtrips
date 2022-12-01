import React from 'react';
import Carousel from '../components/Carousel';
import Trip from '../components/Trip';
import { TripsContext } from '../contexts/TripContext';

const Home = () => {
  const {trips} = React.useContext(TripsContext);

  return (
    <React.Fragment>
      <Carousel />
      <div className='container-fluid'>
        <div className='row g-4'>
          {
            trips.map(trips => (
              <div key={trips.id} className='col-sm-4'>
                <Trip trips={trips} />
              </div>
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;