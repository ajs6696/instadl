import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import TopBar from '../components/TopBar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home(props) {

  return (
      <>
        <div className='container-fluid mx-auto'>
            <div className="row mb-3 mx-auto">
              <TopBar/>
              <Menu/>
            </div>  
            <div className="row mb-3 mx-auto">
              <Main/>
            </div>
        </div>  
        <Footer/>
      </>
  )
}
