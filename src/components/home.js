import React, { Component } from 'react'
import './style4.css';

import Contact from './contact'

class Home extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                  <button type="button" id="sidebarCollapse" className="btn btn-info">
                  <i className="fas fa-align-left"></i>
                  </button>
                  <span className="ml-2"><b>Logo</b></span>
                  <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-align-justify"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active">
                           <a className="nav-link" href="#">Page</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Page</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Page</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Page</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <div className="wrapper">
               <nav id="sidebar">
                  <div className="sidebar-header">
                     <h3>Sidebar</h3>
                  </div>
                  <ul className="list-unstyled components">
                     <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-home mr-2"></i>&nbsp;
                        Home
                        </a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                           <li>
                              <a href="#">Home 1</a>
                           </li>
                           <li>
                              <a href="#">Home 2</a>
                           </li>
                           <li>
                              <a href="#">Home 3</a>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <a href="#">
                        <i className="fas fa-briefcase  mr-2"></i>
                        About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy mr-2"></i>
                        Pages
                        </a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                           <li>
                              <a href="#">Page 1</a>
                           </li>
                           <li>
                              <a href="#">Page 2</a>
                           </li>
                           <li>
                              <a href="#">Page 3</a>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <a href="#">
                        <i className="fas fa-image mr-2"></i>
                        Portfolio
                        </a>
                     </li>
                     <li>
                        <a href="#">
                        <i className="fas fa-question mr-2"></i>
                        FAQ
                        </a>
                     </li>
                     <li>
                        <a href="#">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Contact
                        </a>
                     </li>
                  </ul>
               </nav>
               <div id="content">
                 <Contact />
               </div>
            </div>
         </div>        
        )
    }
}

export default Home
