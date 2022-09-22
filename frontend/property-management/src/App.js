import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NewPropertyPage from './pages/NewPropertyPage'
// import PropertyDetailsPage from './pages/PropertyDetailsPage'
// import ApartmentsPage from './pages/ApartmentsPage'
// import NewApartmentPage from './pages/NewApartmentPage'
// import ApartmentsDetailsPage from './pages/ApartmentsDetailsPage'
// import EditPropertyPage from './pages/EditPropertyPage'
import NavBar from './components/NavBar';

import { Routes, Route } from 'react-router-dom'
import PropertyDetailsPage from './pages/PropertyDetailsPage';

function App() {

  return (
    <div >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SignUpPage' element={<SignUpPage />} />
        <Route path='/PropertyDetailsPage/:id' element={<PropertyDetailsPage />} />
        <Route path='/NewProperty' element={<NewPropertyPage />} />

      </Routes>

    </div>
  )
}

export default App;
