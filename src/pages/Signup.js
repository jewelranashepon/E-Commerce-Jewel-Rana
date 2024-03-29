import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
     <Meta title="Sign Up"/>
     <BreadCrumb title="Sign Up"/>

     <div className="login-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
      <div className="row">
            <div className="col-12">
                <div className="login-card">
                    <h3 className="text-center">Sign Up</h3>
                    <form action='' className="d-flex flex-column gap-15">
                        <div>
                            <input
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                            className="form-control"/>
                        </div>
                        <div>
                            <input
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                            className="form-control"/>
                        </div>
                        <div>
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"/>
                        </div>
                        <div>
                            <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"/>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                <button className="button border-0">Sign Up</button>
                                <Link to="" className="button signup">Clear</Link>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
       

     </div>
      
    </>
  )
}

export default Signup