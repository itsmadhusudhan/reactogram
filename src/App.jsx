import React,{Fragment} from 'react';
import {renderRoutes} from 'react-router-config';
import routes from './routes';
import Header from './components/Header';

const App=(props)=>{

  return(
    <Fragment>
    <Header/>
   { renderRoutes(routes)}
    </Fragment>
  )
}

export default App;