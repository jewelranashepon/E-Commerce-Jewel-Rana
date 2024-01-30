import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <>
    <header className="header-top-strip py-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">
              Free Shipping Over $100 & Free Returns
            </p>

          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Hotline: <a className="text-white" href="tel: +88 01773097310">+88 01773097310</a>
            </p>

          </div>

        </div>

      </div>

    </header>

    <header className="header-upper py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link to="/" className="text-white">Jewel</Link>
            </h2>
          </div>
          <div className="col-5">
            <div class="input-group">
              <input
               type="text"
               class="form-control py-2" 
               placeholder="Search your product here..."
               aria-label="Search your product here..." 
               aria-describedby="basic-addon2" 
              />
              <span class="input-group-text p-2" id="basic-addon2">
                <BsSearch className="fs-6"/>
              </span>
           </div>    
          </div>

          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                <img src="/images/compare.svg" alt="compare"/>
                <p className="mb-0">Compare<br/>Products</p>
                </Link>
              </div>

              <div>
              <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                <img src="/images/wishlist.svg" alt="compare"/>
                <p className="mb-0">Favourite<br/>Wishlist</p>
              </Link>
              </div>

              <div>
              <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                <img src="/images/user.svg" alt="compare"/>
                <p className="mb-0">Log in<br/>My account</p>
              </Link>
              </div>

              <div>
              <Link className="d-flex align-items-center gap-10 text-white">
                <img src="/images/cart.svg" alt="compare"/>
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">5</span>
                  <p className="mb-0">$100</p>

                </div>
              </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </header>

    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-40">
              <div>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="category-icon" src="/images/category_p.svg" alt="" />
                    <span className="d-inline-block">Shop Categories</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item text-white" to="">Action</Link></li>
                    <li><Link class="dropdown-item text-white" to="">Another action</Link></li>
                    <li><Link class="dropdown-item text-white" to="">Something else here</Link></li>
                  </ul>
                </div>
              </div>

              <div className="menu-links">
                <div className="d-flex align-items-center gap-30">
                  <NavLink className="text-white" to="/">Home</NavLink>
                  <NavLink className="text-white" to="/product">Our Store</NavLink>
                  <NavLink className="text-white" to="/blogs">Blogs</NavLink>
                  <NavLink className="text-white" to="/contact">Contact</NavLink>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
      
    </>
  )
}

export default Header