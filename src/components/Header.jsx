import React from 'react'

function Header() {
  return (
    <div>
           <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center jus-space">

            {/* <h1 className="logo me-auto"><a href="index.html">Arsha</a></h1> */}
            {/* Uncomment below if you prefer to use an image logo */}
            <a href="/" className="logo mr-80">
                <img src="assets/img/webdew.png" alt="" className="img-fluid"/></a>

            <nav id="navbar" className="navbar left-160">
                <ul>
                <li className="dropdown left-15"><a href="#" className="nav-link active-nav">
                    <span>Services</span> <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li><a href="#">Drop Down 2</a></li>
                    
                    </ul>
                </li>
                <li><a className="nav-link scrollto" href="#">Work</a></li>
                <li className="dropdown"><a href="#" className="nav-link"><span>Resources</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li><a href="#">Drop Down 2</a></li>
                    
                    </ul>
                </li>
                <li><a className="nav-link scrollto" href="#">Blog</a></li>
                <li className="mr-60"><a className="nav-link scrollto" href="#">About</a></li>
                
                
                <li className="left-100"><a className="c-btn text-web mx-3" href="#">Let's talk</a></li>
                <li className="left-90"><a className="getstarted scrollto text-web" href="#">Order now</a></li>
                
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav> {/* .navbar #00A9FA */}

            </div>
        </header>
    </div>
  )
}

export default Header