import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
     <Meta title="Compare Products"/>
     <BreadCrumb title="Compare Products"/>

     <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img
                            src="images/cross.svg"
                            alt="cross"
                            className="position-absolute cross img-fluid"
                        />
                        <div className="product-card-image">
                            <img src="images/mobile.jpg" alt="watch" className="img-fluid w-100"/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                                Samsung Galaxy S25+ Ultra Pro Max.
                            </h5>
                            <h6 className="price">$100</h6>
                            <div className="product-detail">
                                <h5 className="title">Brand:</h5>
                                <p>Samsung</p>
                            </div>
                            <div className="product-detail">
                                <h5 className="title">Type:</h5>
                                <p>Mobile</p>
                            </div>
                            <div className="product-detail">
                                <h5 className="title">Availablity:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                                <h5 className="title">Color:</h5>
                                <Color />
                            </div>
                            <div className="product-detail">
                                <h5 className="title">Size:</h5>
                                <p>6.5 Inch</p>
                            </div>

                        </div>
                        

                    </div>

                </div>

            </div>

        </div>

     </div>
        
    </>
  )
}

export default CompareProduct