import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';




const SingleProduct = () => {
  const props = {width: 400, height: 500, zoomWidth: 500, img: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$"};
  const [orderedProduct, setorderedProduct]= useState(true);
  return (
    <>
     <Meta title="Single Blog Page"/>
     <BreadCrumb title="Single Blog Page"/>

     <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                  <div className="main-product-image">
                    <div>
                      <ReactImageZoom {...props} />
                    </div>


                  </div>

                  <div className="other-product-images d-flex flex-wrap gap-15">
                    <div>
                      <img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" alt="" className="img-fluid" />
                    </div>

                    <div>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" alt="" className="img-fluid" />
                    </div>

                    <div>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" alt="" className="img-fluid" />
                    </div>

                    <div>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" alt="" className="img-fluid" />
                    </div>

                  </div>

                </div>
                <div className="col-6">

                </div>
            </div>

        </div>

     </div>

     <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
               <h4 className="">Description</h4>
                <div className="bg-white p-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum. 
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <section className="reviews-wrapper home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3>Reviews</h3>
               <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                        count={5}
                      // onChange={ratingChanged}
                        size={24}
                        value={4}
                        activeColor="#ffd700"/>
                        <p className="mb-0">Based on 5 reviews</p>
                      </div>
                    </div>
                    {
                      orderedProduct && (
                        <div>
                          <a href="" className="text-dark text-decoration-underline">Write a review</a>
                        </div>
                      )
                    }
                </div>
                
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                       <ReactStars
                        count={5}
                      // onChange={ratingChanged}
                        size={24}
                        value={4}
                        activeColor="#ffd700"/> 
                    </div>
                    <div>
                      <textarea 
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Comments">
                      </textarea>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button className="button">Submit Review</button>
                    </div>
                    

                  </form>

                </div>

                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Jewel Rana</h6>
                      <div>
                      <ReactStars
                        count={5}
                      // onChange={ratingChanged}
                        size={24}
                        value={4}
                        activeColor="#ffd700"/>
                      </div>
                    </div>
                    <p className="mt-3">
                      Samsung Galaxy S25 is a phone that looks great and has a lot to offer.
                      With the latest processor and a long-lasting battery, it is the perfect
                      choice for people who are always on the go. The Samsung Galaxy S25 5G
                      is one of the top smartphones in its category. It features a beautiful
                      design and an impressive display.
                    </p>

                  </div>

                </div>

               </div>
              </div>
            </div>
          </div>
        </section>





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