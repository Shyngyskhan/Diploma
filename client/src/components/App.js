import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadBoutiquePage from './views/UploadProductPage/UploadBoutiquePage'
import DetailBoutiquePage from './views/DetailProductPage/DetailBoutiquePage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import { Table } from './views/Table/Table';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/boutiques" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/boutique/add" component={Auth(UploadBoutiquePage, true)} />
          <Route exact path="/boutique/:boutiqueId" component={Auth(DetailBoutiquePage, null)} />
          <Route exact path="/table/" component={Auth(Table, null)} />
          {/* <Route exact path="/user/cart" component={Auth(CartPage, true)} /> */}
          <Route exact path="/history" component={Auth(HistoryPage, true)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
