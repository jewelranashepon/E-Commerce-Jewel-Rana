import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";


const SingleBlog = () => {
  return (
    <>
     <Meta title="Single Blog Page"/>
     <BreadCrumb title="Single Blog Page"/>

     <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blogs" className="d-flex align-items-center gap-10">
                            <MdKeyboardBackspace className="fs-4"/>
                            Go back to Blogs
                        </Link>
                        <h3>
                            Samsung Galaxy S25+ Ultra Pro Max.
                        </h3>
                        <img src="images/blog-1.jpg" alt="blogs" className="img-fluid w-100 my-4" />
                        <p>
                            With the Galaxy S24, Samsung addressed several nagging issues 
                            and introduced a suite of new AI tools to further enhance the 
                            Galaxy experience. With the Galaxy S25, we expect to see 
                            Samsung further improve the overall Galaxy experience with more
                            refinements and even better hardware.
                        </p>    

                    </div>

                </div>

            </div>

        </div>

     </div>
        
    </>
  )
}

export default SingleBlog;