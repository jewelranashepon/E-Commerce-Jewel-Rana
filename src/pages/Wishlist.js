import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';


const Wishlist = () => {
  return (
    <>
     <Meta title="Wishlist"/>
     <BreadCrumb title="Wishlist"/>

     <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img
                            src="images/cross.svg"
                            alt="cross"
                            className="position-absolute cross img-fluid"
                        />
                        <div className="=wishlist-card-image">
                            <img src="images/mobile.jpg" alt="watch" className="img-fluid w-100"/>
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">
                                Samsung Galaxy S25+ Ultra Pro.

                            </h5>
                            <h6 className="price">$100</h6>

                        </div>

                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img
                            src="images/cross.svg"
                            alt="cross"
                            className="position-absolute cross img-fluid"
                        />
                        <div className="=wishlist-card-image">
                            <img src="images/mobile.jpg" alt="watch" className="img-fluid w-100"/>
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">
                                Samsung Galaxy S25+ Ultra Pro.

                            </h5>
                            <h6 className="price">$100</h6>

                        </div>

                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img
                            src="images/cross.svg"
                            alt="cross"
                            className="position-absolute cross img-fluid"
                        />
                        <div className="=wishlist-card-image">
                            <img src="images/mobile.jpg" alt="watch" className="img-fluid w-100"/>
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">
                                Samsung Galaxy S25+ Ultra Pro.

                            </h5>
                            <h6 className="price">$100</h6>

                        </div>

                    </div>
                </div>
            </div>
        </div>

     </div>
        
    </>
  )
}

export default Wishlist