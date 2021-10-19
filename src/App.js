
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Pricing from './Pages/Pricing/Pricing';
import ServiceDetails from './Pages/Home/Services/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >

      <AuthProvider>
     <BrowserRouter>
     <Header></Header>
        <Switch>
          {/* Home Page Route  */}
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          {/* About Us Page  */}
          <PrivateRoute path='/aboutus'>
            <About></About>
          </PrivateRoute>
          {/* Pricing Page  */}
          <PrivateRoute path='/pricing'>
           <Pricing></Pricing>
          </PrivateRoute>
          {/* Dynamic Route  */}
          <PrivateRoute path='/services/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          {/* Login Page  */}
          <Route path='/login'>
            <Login></Login>
          </Route>
          {/* Register Page  */}
          <Route path='/register'>
            <Register></Register>
          </Route>
          {/* Not Found PAge  */}
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
