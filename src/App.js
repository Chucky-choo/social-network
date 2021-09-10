import s from './App.module.css';
import {Route, Switch, withRouter} from "react-router-dom";
import React, {useEffect, Suspense, lazy} from 'react';
import Praloder from "./Elements/Preloader/Praloder";
import {connect} from "react-redux";
//import {initializedTC} from "./redux/app-reducer";
import {compose} from "redux";
import {Redirect} from "react-router";
import Header from "./components/Header/Header";
import NotAddedContent from "./Elements/NotAddedContent/NotAddedContent";
import NotFound from "./Elements/NotFound/NotFound";


const ContentContainer = lazy(() => import('./components/Content/ContentContainer'))
const Music = lazy(() => import('./components/Music/Music'))
const Users = lazy(() => import('./components/Users/Users'))
const Login = lazy(() => import('./components/Login/Login'))
//const EditingProfile = lazy(() => import("./components/EditingProfile/EditingProfile"))

let App = ({initializedChecked, initializedTC}) => {

 const catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent.reason.message)
  }

  useEffect(() => {
   // initializedTC(true)
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
     return () => {
       window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
     }
  }, [])

  // if (!initializedChecked) {
  //   return <Praloder/>
  // }

  return (
    <div className={s.body}>
      <Header />
      <div className={s.normal_mode}>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/'
                 render={ () => <Redirect to={'/Content'} />} />
          <Route path="/content/:userLogin?" component={ContentContainer}/>
          <Route path={"/dialogs"} component={NotAddedContent}/>
          <Route path={"/news"} component={NotAddedContent}/>
          <Route path={"/settings"} component={NotAddedContent}/>
          <Route path={"/music"} component={Music}/>
          <Route path={"/users"} component={Users}/>
          <Route path={"/login"} component={Login}/>
         {/*<Route path={"/EditingProfile"} component={EditingProfile}/>*/}
          <Route path="/404" component={NotFound} />
          <Redirect to='/404' />
        </Switch>


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
  connect(mapStateToProps,)
)(App)

