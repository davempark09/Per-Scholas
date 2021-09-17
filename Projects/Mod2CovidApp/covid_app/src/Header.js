import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import Homepage from './HomePage'
import FirstContent from './FirstContent'
import SecondContent from './SecondContent'
import Form from './Form'
import UserLogin from './UserLogin'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

const syringeIcon = <FontAwesomeIcon icon={faSyringe} />

export class Header extends Component {
        
    render() {
        return (
        <nav className='NavItems'>
            <div className='MenuIcon'>
                {syringeIcon}
            </div>
            <h1 className='NavLogo'>Covid Tracker</h1>
            <Router>
            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/FirstContent'>Statistics</Link></li>
                <li><Link to='/SecondContent'>Visual Data</Link></li>
                <li><Link to='/Form'>Contact Form</Link></li>
                <li><Link to='/UserLogin'>User Login</Link></li>
            </ul>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/FirstContent' component={FirstContent} />
                <Route path='/SecondContent' component={SecondContent} />
                <Route path='/Form' component={Form} />
                <Route path='/UserLogin' component={UserLogin} />
            </Switch>
            </Router>
        </nav>
        )
    }
}

export default Header

