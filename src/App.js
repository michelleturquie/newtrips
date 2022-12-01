import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.esm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TripProvider from './contexts/TripContext';
import ContextProvider from './contexts/TripContext';
import Home from './views/Home';
import Contactos from './views/Contactos';
import ContactoEnviado from './views/ContactoEnviado';
import MyTrips from './views/MyTrips';


function App() {
  return (
    <TripProvider>
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/MyTrips' element={<MyTrips />} />
            <Route path='/Contactos' element={<Contactos />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/ContactoEnviado' element={<ContactoEnviado />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </TripProvider>
    
  );
}

export default App;
