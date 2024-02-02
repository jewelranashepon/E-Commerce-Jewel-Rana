import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

  return (
   <>
    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="product-card position-relative">
            <div className="product-image">
                <img src="images/watch.jpg" alt="product-image" className="img-fluid"/>
                <img src="images/watch-1.jpg" alt="product-image" className="img-fluid"/>

            </div>
            <div className="product-details">
                <h6 className="brand">Hevels</h6>
                <h5 className="product-title">Childrens Colorful Watch with different Size and price.</h5>
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
                 <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                 The eco-friendly and power saving, Havells consumer products provide great functionality and durability,
                 and look chic to suit the needs of your living spaces.
                </p>
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
            <div className="wishlist-icon position-absolute">
                <img src="images/wish.svg" alt="wishlist" />

            </div>

        </Link>
        
    </div>

    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="product-card position-relative">
            <div className="product-image">
                <img src="images/watch.jpg" alt="product-image" className="img-fluid"/>
                <img src="images/watch-1.jpg" alt="product-image" className="img-fluid"/>

            </div>
            <div className="product-details">
                <h6 className="brand">Hevels</h6>
                <h5 className="product-title">Childrens Colorful Watch with different Size and price.</h5>
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
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                 The eco-friendly and power saving, Havells consumer products provide great functionality and durability,
                 and look chic to suit the needs of your living spaces.
                </p>

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
            <div className="wishlist-icon position-absolute">
                <img src="images/wish.svg" alt="wishlist" />

            </div>

        </Link>
        
    </div>

    
   </>
  )
}

export default ProductCard