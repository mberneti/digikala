import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Orders from "./components/pages/Orders/Orders";
import NotFound from "./components/pages/NotFound/NotFound";
import ProductDetails from "./components/pages/ProductDetails/ProductDetails";
import ProductList from "./components/pages/ProductList/ProductList";
import DThemeProvider from "./theme/DThemeProvider";

function Router() {
  return (
    <BrowserRouter>
      <DThemeProvider>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <ProductDetails />
            </Route>
            <Route path="/profile/orders">
              <Orders />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </MainLayout>
      </DThemeProvider>
    </BrowserRouter>
  );
}

export default Router;
