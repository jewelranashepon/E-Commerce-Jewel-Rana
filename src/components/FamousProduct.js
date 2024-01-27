import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const FamousProduct = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

  return (
    <div className="col-2">
        <Link className="famous-product-card position-relative">
            <div className="product-image">
                <img src="images/mobile.jpg" alt="product-image" className="img-fluid"/>
                <img src="images/mobile-2.jpg" alt="product-image" className="img-fluid"/>

            </div>
            <div className="product-details">
                <h6 className="brand">Samsung</h6>
                <h5 className="product-title">Samsung Galaxy S24 series announcement and pre-order timeline tipped</h5>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value="3.5"
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                <p className="price">$100.00</p>

            </div>

            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                    <img src="images/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>
                    <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link>
                    <img src="images/add-cart.svg" alt="addToCart" />
                    </Link>

                </div>

            </div>
            <div className="famous-wishlist-icon position-absolute">
                <img src="images/wish.svg" alt="wishlist" />

            </div>

        </Link>
        
    </div>
  )
}

export default FamousProduct