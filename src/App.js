import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getAllCategory } from './actions';
import { useEffect } from 'react';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import {getInitialData} from './actions'




function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
    dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData())
},[])


  return (
    <div className="App">
      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        <PrivateRoute path='/products' component={Products} />
        <PrivateRoute path='/orders' component={Orders} />
        <PrivateRoute path='/category' component={Category} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
