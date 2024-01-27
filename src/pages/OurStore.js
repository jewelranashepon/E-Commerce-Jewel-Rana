import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';



const OurStore = () => {
    const [grid, setGrid] = useState(3);
    // alert(grid);

  return (
    <>
    <Meta title="Our Store"/>
    <BreadCrumb title="Our store"/>

    <div className="store-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Computer</li>
                                <li>Mobile</li>
                                <li>Television</li>
                                <li>Watch</li>
                                <li>Camera</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                            <h5 className="sub-title">Availablity</h5>
                            <div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value=""
                                        id="">
                                    </input>
                                    <label className="form-check-label" htmlFor="">
                                        In Stock(20)
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value=""
                                        id="">
                                    </input>
                                    <label className="form-check-label" htmlFor="">
                                        Out Of Stock(5)

                                    </label>
                                </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className="d-flex align-items-center gap-10">
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="From" />
                                    <label htmlFor="floatingInput">
                                        From:
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="floatingInput1" 
                                        placeholder="To" />
                                    <label htmlFor="floatingInput1">
                                        To:
                                    </label>
                                </div>
                            </div>

                            <h5 className="sub-title">Color</h5>
                            <div>
                                <div>
                                    <ul className="colors fs-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>

                                </div>
                            </div>

                            <h5 className="sub-title">Size</h5>
                            <div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value=""
                                        id="">
                                    </input>
                                    <label className="form-check-label" htmlFor="">
                                        S(5)
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value=""
                                        id="">
                                    </input>
                                    <label className="form-check-label" htmlFor="">
                                        M(5)

                                    </label>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Product Tags</h3>
                        <div>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-5px">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Laptop
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Mobile
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Camere
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Watch
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Headphone
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className="filter-card mb-3">
                    <h3 className="filter-title">Random Products</h3>
                    <div>
                        <div className="random-products d-flex mb-2 home-wrapper-2">
                            <div className="w-50">
                                <img 
                                    src="images/mobile-2.jpg" 
                                    className="img-fluid"
                                    alt="mobile"
                                />

                            </div>
                            <div className="w-50 py-2 " >
                                <h5>iPhone s15+ Pro.</h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    value="3.5"
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <p>$100</p>

                            </div>

                        </div>

                        <div className="random-products d-flex home-wrapper-2">
                            <div className="w-50">
                                <img 
                                    src="images/mobile-2.jpg" 
                                    className="img-fluid"
                                    alt="mobile"
                                />

                            </div>
                            <div className="w-50 py-2 " >
                                <h5>iPhone s15+ Pro.</h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    value="3.5"
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <p>$100</p>

                            </div>

                        </div>
                    </div>

                    </div>
                </div>

                <div className="col-9">
                    <div className="filter-sort-grid mb-3">
                       <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-10">
                                <p className="mb-0 d-block" style={{width: "90px"}}>Sort By:</p>
                                <select name="" className="form-control form-select" id="">
                                    <option value="manual">Featured</option>
                                    <option value="best-selling" selected>Best Selling</option>
                                    <option value="title-ascending">Alphabetically, A-Z</option>
                                    <option value="title-descending">Alphabetically, Z-A</option>
                                    <option value="price-ascending">Price, Low to High</option>
                                    <option value="price-descending">Price, High to Low</option>
                                    <option value="created-ascending">Date, Old to New</option>
                                    <option value="created descending">Date, New to Old</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <p className="total-products mb-0">20 Products</p>
                                <div className="d-flex align-items-center gap-10 grid">
                                    <img src="images/gr4.svg" className="d-block img-fluid" alt="grid" onClick={()=>setGrid(3)}/>
                                    <img src="images/gr3.svg" className="d-block img-fluid" alt="grid" onClick={()=>setGrid(4)}/>
                                    <img src="images/gr2.svg" className="d-block img-fluid" alt="grid" onClick={()=>setGrid(6)}/>
                                    <img src="images/gr.svg" className="d-block img-fluid" alt="grid" onClick={()=>setGrid(12)}/>
                                </div>
                            </div>    
                       </div>

                    </div>
                    <div className="product-list pb-5">
                        <div className="d-flex gap-10 flex-wrap">
                            <ProductCard grid={grid}/>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default OurStore