import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  return (
    <>
     <Meta title="Single Blog Page"/>
     <BreadCrumb title="Single Blog Page"/>

     <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">

                </div>
            </div>

        </div>

     </div>

     <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> 
        </div>

      </div>

    </section>

        
    </>
  )
}

export default SingleProduct