import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from './components/theme/AppLayout';
import Carta from './components/common/Carta';
import styled from 'styled-components';

import HomeContainer from './containers/HomeContainer';
import PerfilContainer from './containers/PerfilContainer';
import ContactosContainer from './containers/ContactosContainer';
import LoginContainer from './containers/LoginContainer';
import DescubrirContainer from './containers/DescubrirContainer';
import RegistroContainer from './containers/RegistroContainer';


//HISTORIAL[1]
import { BrowserRouter, Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

//REDUCER[2]
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducers from './reducers'

//SAGAS[2]
import { watcherSaga } from "./actions/sagas";
import createSagaMiddleware from "redux-saga";
import UsuariosContainer from './containers/UsuariosContainer';

//INSTANCIAR[2] -> SAGAMIDLEWARE/REDUXDEVTOOLS/STORE
const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
sagaMiddleware.run(watcherSaga);
const historial = createBrowserHistory();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router history={historial}>
        <AppLayout history={historial}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/contactos" component={ContactosContainer} />
            <Route path="/usuarios" component={UsuariosContainer} />
            <Route path="/perfil" component={PerfilContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/registro" component={RegistroContainer} />

          </Switch>
        </AppLayout>
      </Router>
    </ReduxProvider>
  );
}






export default App;
