import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import HomePage from '../components/HomePage'
import ContactPage from '../components/ContactPage'
import NoteFoundPage from '../components/NoutFoundPage'
import Header from '../components/Header'
import PortfolionItemPage from '../components/PortfolioItemPage'
import PortfolionPage from '../components/PortfolioPage'


const AppRouter = () => (
    <BrowserRouter >
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolionPage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolionItemPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NoteFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter;