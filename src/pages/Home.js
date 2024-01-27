import React from 'react';
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import FamousProduct from '../components/FamousProduct';


const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" 
              alt="main banner" 
              className="img-fluid rounded-3"/>
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or 41.62/mo.</p>
                <Link className="button">Buy Now</Link>

              </div>

            </div>

          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" 
                alt="banner-01" 
                className="img-fluid rounded-3"/>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00<br/>or $41.50/mo.
                  </p>

                </div>

              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" 
                alt="banner-01" 
                className="img-fluid rounded-3"/>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00<br/>or $41.50/mo.
                  </p>

                </div>

              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" 
                alt="banner-01" 
                className="img-fluid rounded-3"/>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00<br/>or $41.50/mo.
                  </p>

                </div>

              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" 
                alt="banner-01" 
                className="img-fluid rounded-3"/>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00<br/>or $41.50/mo.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


    </section>

    {/* second section here  */}

    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-10">
                <img src="images/service.png" alt="services" />
                <div>
                <h6>Free Shipping</h6>
                <p className="mb-0">From All Orders over $10</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-10">
                <img src="images/service-02.png" alt="services" />
                <div>
                <h6>Daily Surprise Offers</h6>
                <p className="mb-0">Save upto 25% off</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-10">
                <img src="images/service-03.png" alt="services" />
                <div>
                <h6>Support 24/7</h6>
                <p className="mb-0">Shop with an expert</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-10">
                <img src="images/service-04.png" alt="services" />
                <div>
                <h6>Affordable Price</h6>
                <p className="mb-0">Get factory default price</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-10">
                <img src="images/service-05.png" alt="services" />
                <div>
                <h6>Secure Payments</h6>
                <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    {/* Product section  */}

    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>

            

            </div>

          </div>

        </div>

      </div>

    </section>

    {/* Featured Products */}
    <section className="featured-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>

    </section>

    {/* Famous Products  */}
    <section className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Famous Product</h3>
          </div>         
        </div>

        <div className="row">
          <FamousProduct />
          <FamousProduct />
          <FamousProduct />
          <FamousProduct />
          <FamousProduct />
          <FamousProduct />
        </div>
      </div>

    </section>

    {/* Special Products  */}
    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>

        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>

      </div>

    </section>

     {/* Popular Products */}
     <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>

    </section>

    {/* Margue Logo section  */}
    <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
              </Marquee>

            </div>

          </div>

        </div>

      </div>

    </section>


    {/* Blog section  */}
    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

      </div>

    </section>
      
    </>
  )
}

export default Home