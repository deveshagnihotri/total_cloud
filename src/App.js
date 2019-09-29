/*
 * @Author: Devesh Agnihotri
 * @Date: 2019-09-29 04:22:53
 * @Last Modified by: Devesh Agnihotri
 * @Last Modified time: 2019-09-29 04:48:35
 */
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardItem from './components/CardItem';
import { ToastContainer, toast } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/Home';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <div className="background"></div>
        <div className="headers">
          <Header />
        </div>
        <div className="title-container">
          <h3 className="title-heading">
            The Best App to Increase Your Productivity
          </h3>
        </div>
        <div className="box-container">
          <CardItem />
        </div>
      </div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
