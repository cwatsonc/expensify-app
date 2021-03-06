import React from "react";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact={true} path="/" component={ExpenseDashboard} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>)

export default AppRouter;