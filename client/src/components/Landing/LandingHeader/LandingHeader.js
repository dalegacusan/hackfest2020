import React from 'react';

export default function LandingHeader() {
  return (
    <header className="site-navbar site-navbar-target" role="banner">

      <div className="container">
        <div className="row align-items-center">

          <div className="col-6 col-lg-2">
            <h1 className="mb-0 site-logo"><a href="index.html" className="mb-0">SoftLand</a></h1>
          </div>

          <div className="col-12 col-md-10 d-none d-lg-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                <li><a href="features.html" className="nav-link">Features</a></li>
                <li><a href="pricing.html" className="nav-link">Pricing</a></li>

                <li className="has-children">
                  <a href="blog.html" className="nav-link">Blog</a>
                  <ul className="dropdown">
                    <li><a href="blog.html" className="nav-link">Blog</a></li>
                    <li><a href="blog-single.html" className="nav-link">Blog Sigle</a></li>
                  </ul>
                </li>
                <li><a href="contact.html" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="col-6 d-inline-block d-lg-none ml-md-0 py-3" style={{ position: "relative", top: "3px" }}>

            <a href="#" className="burger site-menu-toggle js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>

        </div>
      </div>

    </header>
  );
}