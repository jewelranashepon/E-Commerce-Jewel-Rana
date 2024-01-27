import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProduct = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

  return (
    <div className="col-4 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/mobile.jpg" alt="mobile" className="img-fluid"/>
                </div>
                <div className="special-product-content">
                    <h5 className="brand">Samsung</h5>
                    <h6 className="title">Samsung Galaxy Note 24 Ultra Specifications</h6>
                    <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value="4.5"
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-p">$1000</span> &nbsp; <strike>$1200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0"><b>7</b> days</p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-2 bg-warning">3</span>:
                            <span className="badge rounded-circle p-2 bg-warning">2</span>:
                            <span className="badge rounded-circle p-2 bg-warning">1</span>

                        </div>

                    </div>
                    <div className="prod-count my-3">
                        <p className="mb-0">Products: 5</p>
                        <div class="progress">
                            <div className="progress-bar" 
                                role="progressbar" 
                                style={ { width: "25%" } }
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                            </div>
                        </div>

                    </div>
                    <Link className="button">Add to Cart</Link>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default SpecialProduct