import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './sass/main.scss';

import IndexPage from './pages/IndexPage';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';

import Header from './components/Header';
import Footer from './components/Footer';

import resumePdf from './content/FlanneryJeffersonResume.pdf';

ReactDOM.render(
  <BrowserRouter>
      <div className='routes'>
        <Switch>
          <Route exact path='/resume' component={ResumePage}/>

          <Route exact path='/FlanneryJeffersonResume.pdf' component={resumePdf}/>
          <Route path='/'>
              <div className='site-content'>
                <Switch>
                  <Route exact path='/' component={IndexPage}/>
                  <Route path='/' component={ErrorPage}/>
                </Switch>
              </div>
          </Route>
        </Switch>
      </div>
  </BrowserRouter>
  , document.getElementById('root'));
