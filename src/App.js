import s from './App.module.css';
import {Route, withRouter} from "react-router-dom";
import React, {useEffect, Suspense, lazy} from 'react';
import Praloder from "./Elements/Preloader/Praloder";
import {connect} from "react-redux";
import {initializedTC} from "./redux/app-reducer";
import {compose} from "redux";
import EditingProfileContainer from "./components/EditingProfile/EditingProfileContainer";
import {Redirect} from "react-router";
import Header from "./components/Header/Header";


const ContentContainer = lazy(() => import('./components/Content/ContentContainer'))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const News = lazy(() => import('./components/News/News'))
const Settings = lazy(() => import('./components/Settings/Settings'))
const Music = lazy(() => import('./components/Music/Music'))
const Users = lazy(() => import('./components/Users/Users'))
const Login = lazy(() => import('./components/Login/Login'))

let App = ({initializedChecked, initializedTC}) => {

 const catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent.reason.message)
  }

  useEffect(() => {
    initializedTC(true)
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
     return () => {
       window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
     }
  }, [])

  if (!initializedChecked) {
    return <Praloder/>
  }

  return (
    <div className={s.body}>
      <Header />
      <div className={s.normal_mode}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Route exact path='/'
                 render={ () => <Redirect to={'/Content'} />} />
          <Route path="/content/:userId?" component={ContentContainer}/>
          <Route path={"/dialogs"} component={DialogsContainer}/>
          <Route path={"/news"} component={News}/>
          <Route path={"/settings"} component={Settings}/>
          <Route path={"/music"} component={Music}/>
          <Route path={"/users"} component={Users}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/EditingProfile"} component={EditingProfileContainer}/>
        </Suspense>
      </div>
    </div>
  );
}


const mapStateToProps = (store) => {
  return {
    initializedChecked: store.app.initializedChecked
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializedTC})
)(App)

