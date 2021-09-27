import React from 'react';

export const Menu = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
          <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" datatoggle="collapse" datatarget=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle menu</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">Welcome</a>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a className="page-scroll" href="#page-top">Top</a>
                  </li>
                  <li>
                      <a className="page-scroll" href="#prices">Prices</a>
                  </li>
                  <li>
                      <a className="page-scroll" href="#currencies">Currencies</a>
                  </li>
                  <li>
                      <a className="page-scroll" href="#login">Login</a>
                  </li>
              </ul>
          </div>	
          {/* <!-- .navbar-collapse --> */}
      </div>		
      {/* <!-- .container --> */}
    </nav>

  )
}

export default Menu;